package com.springboard.project.controller;


import com.springboard.project.domain.ErrorCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.Errors;

import javax.inject.Inject;
import javax.inject.Provider;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Slf4j
public abstract class AbstractController {

    @Inject Provider<ErrorCode> errorCodeProvider;

    List<ErrorCode> handleErrors(Errors errors, Locale locale) {
        List<ErrorCode> errorCodes = new ArrayList<>();
        if(!errors.hasErrors()) { throw new UnsupportedOperationException("Need to specify error in ErrorObject"); }
        errors.getAllErrors().forEach(error -> {
            ErrorCode errorCode = errorCodeProvider.get();
            errorCode.setLocale(locale);
            errorCode.setErrorCode(error.getCode());
            errorCode.setMessage(error.getDefaultMessage());
            log.warn(errorCode.toString());
            errorCodes.add(errorCode);
        });
        return errorCodes;
    }
}
