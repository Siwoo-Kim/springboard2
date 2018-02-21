package com.springboard.project.exception;

public class DocumentTagSizeExceedException extends ApplicationDomainException{

    public DocumentTagSizeExceedException(String message, String errorCode) {
        super(message, errorCode);
    }
}
