package com.springboard.project.exception;

import lombok.Getter;

@Getter
public class ReviewNotFoundException extends ApplicationDataException {
    public ReviewNotFoundException(String message, String errorCode) {
        super(message, errorCode);
    }
}
