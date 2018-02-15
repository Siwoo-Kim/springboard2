package com.springboard.project.exception;

import lombok.Getter;

@Getter
public class JournalNotFoundException extends ApplicationDataException {

    public JournalNotFoundException(String message, String errorCode) {
        super(message, errorCode);
    }

}
