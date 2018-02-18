package com.springboard.project.validator;

import com.springboard.project.domain.ModelCode;
import com.springboard.project.repository.ModelCodeRepository;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.Errors;


@Slf4j
@Validator @Getter
public class PageValidatorImpl implements PageValidator {

    @Value("${page.document.maxsize}")
    private int pageDocumentMaxSize;

    @Autowired ModelCodeRepository modelCodeRepository;

    public void validatePage(Pageable pageable, Errors errors,Class domainClass){
        boolean valid = false;
        String modelName = domainClass.getSimpleName();
        int size = pageable.getPageSize();

        if(modelCodeRepository.existsByName(modelName)){
            if(validatePageByModel(modelName,size)){
                valid = true;
            }
        }

        if(valid) return;
        else errors.rejectValue("pageSize","errors.notValid.pageable.size");
    }

    private boolean validatePageByModel(String modelName,int size) {
        switch (modelName){
            case "Document" : return validateSize(size,getPageDocumentMaxSize());
            default: return false;
        }
    }

    /*if page size is ok then return true, else false*/
    private boolean validateSize(int requestPageSize, int pageDocumentMaxSize) {
        return requestPageSize < pageDocumentMaxSize;
    }


}
