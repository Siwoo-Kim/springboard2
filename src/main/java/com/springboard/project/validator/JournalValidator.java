package com.springboard.project.validator;

import com.springboard.project.domain.Journal;
import org.springframework.validation.Errors;

public interface JournalValidator {

    /* validate valid id */
    void validateId(Long id);

    void validateNew(Journal journal, Errors errors);
}
