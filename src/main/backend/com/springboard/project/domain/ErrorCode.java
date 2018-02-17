package com.springboard.project.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceAware;
import org.springframework.util.StringUtils;

import java.util.Locale;

@AllArgsConstructor @NoArgsConstructor
public class ErrorCode implements MessageSourceAware {

    /* to get a error message from MessageBundile */
    @JsonIgnore
    private static MessageSource messageSource;

    @Getter @Setter
    private String errorCode;
    @Setter
    private String message;
    @Getter @Setter
    private Locale locale;

    public String getMessage(){
        if(StringUtils.isEmpty(message)){
            return messageSource.getMessage(errorCode,null, this.locale == null ? Locale.getDefault() : this.locale);
        }
        return message;
    }

    @Override
    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

}
