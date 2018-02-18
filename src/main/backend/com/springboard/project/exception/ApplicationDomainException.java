package com.springboard.project.exception;

public class ApplicationDomainException extends RuntimeException{
    String errorCode;

    public ApplicationDomainException(String message,String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

}
