package com.springboard.project.validator;

import org.springframework.data.domain.Pageable;
import org.springframework.validation.Errors;

public interface PageValidator {
    public <T> void validatePage(Pageable pageable, Errors errors, Class<T> domainClass);
}
