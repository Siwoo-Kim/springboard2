package com.springboard.project.validator;

import com.springboard.project.domain.Document;
import org.springframework.validation.Errors;

public interface DocumentValidator {

    /* validate valid id */
    void validateId(Long id);

    void validateNew(Document document, Errors errors);
}
