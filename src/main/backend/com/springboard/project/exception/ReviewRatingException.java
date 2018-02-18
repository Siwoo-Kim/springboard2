package com.springboard.project.exception;

import lombok.Getter;

@Getter
public class ReviewRatingException extends ApplicationDomainException {
    public ReviewRatingException(String message, String errorCode) {
        super(message, errorCode);
    }
}
