package com.springboard.project.validator;

import com.springboard.project.domain.Document;
import com.springboard.project.exception.DocumentNotFoundException;
import com.springboard.project.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;
import org.springframework.validation.Errors;

@Validator
public class DocumentValidatorImpl implements DocumentValidator {

    @Autowired
    DocumentRepository documentRepository;

    @Override
    public void validateId(Long id) {
        if(!documentRepository.existsById(id)){
            throw new DocumentNotFoundException("Document[id:"+id+"] not found","error.notFound.document.id");
        }
    }

    @Override
    public void validateNew(Document document, Errors errors) {
        if(! ObjectUtils.isEmpty( document.getId() )){
            errors.rejectValue("id","errors.new.notValid.id.document",null);
        }
        if(document.getHit() > 0){
            errors.rejectValue("hit","errors.new.notValid.hit.document",null);
        }
    }
}
