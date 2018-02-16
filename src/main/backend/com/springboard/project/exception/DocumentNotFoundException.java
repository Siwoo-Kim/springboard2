package com.springboard.project.exception;

import lombok.Getter;

@Getter
public class DocumentNotFoundException extends ApplicationDataException {

    public DocumentNotFoundException(String message, String errorCode) {
        super(message, errorCode);
    }

}
