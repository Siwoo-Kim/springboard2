package com.springboard.project.exception;

public class ApplicationDataException extends RuntimeException{
    String errorCode;

    public ApplicationDataException(String message,String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

}
