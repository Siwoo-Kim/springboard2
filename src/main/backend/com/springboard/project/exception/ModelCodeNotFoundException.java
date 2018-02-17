package com.springboard.project.exception;

import lombok.Getter;

@Getter
public class ModelCodeNotFoundException extends ApplicationDataException {
    public ModelCodeNotFoundException(String message, String errorCode) {
        super(message, errorCode);
    }
}
