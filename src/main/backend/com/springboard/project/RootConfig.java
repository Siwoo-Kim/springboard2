package com.springboard.project;

import com.springboard.project.domain.ErrorCode;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.PropertiesFactoryBean;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.core.io.ClassPathResource;

import java.util.Locale;

@Log
@Configuration
public class RootConfig {

    @Bean
    MessageSource messageSource(){
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasenames(
                "classpath:/META-INF/i18n/errors",
                "classpath:/META-INF/i18n/messages");
        messageSource.setDefaultEncoding("UTF8");
        return messageSource;
    }

    @Bean @Scope("prototype")
    ErrorCode errorCode(){
        return new ErrorCode();
    }

/*
    @Bean
    CommandLineRunner commandLineRunner(MessageSource messageSource){
        return args -> {
            log.warning( messageSource.getMessage("errors.new.notValid.hit.document", null, Locale.ENGLISH) );
        };
    }
*/

}
