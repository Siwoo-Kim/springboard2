package com.springboard.project.validator;

import com.springboard.project.domain.Document;
import com.springboard.project.exception.DocumentNotFoundException;
import com.springboard.project.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;
import org.springframework.validation.Errors;

import java.time.LocalDate;

@Validator
public class DocumentValidatorImpl implements DocumentValidator {

    @Autowired
    DocumentRepository documentRepository;

    @Override
    public void validateId(Long id) {
        if(!documentRepository.existsById(id)){
            throw new DocumentNotFoundException("Document[id:"+id+"] not found", "errors.notFound.document.id");
        }
    }

    @Override
    public void validateNew(Document document, Errors errors) {
        if(! ObjectUtils.isEmpty( document.getId() )){
            errors.rejectValue("id","errors.new.notValid.document.id",null);
        }
        if(document.getHit() > 0){
            errors.rejectValue("hit","errors.new.notValid.document.hit",null);
        }
        /* if the postDate is empty set the current time */
        if(ObjectUtils.isEmpty(document.getPostDate())){
            document.setPostDate(LocalDate.now());
        }
    }
}
