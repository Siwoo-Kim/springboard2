package com.springboard.project.resource;

import com.springboard.project.RootConfig;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Locale;
import static org.junit.Assert.*;

@Slf4j
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = RootConfig.class)
public class I18nMessageTest {

    @Autowired
    MessageSource messageSource;

    @Test
    public void testErrorMessage(){

        String message = messageSource.getMessage("errors.new.notValid.document.hit",null, Locale.ENGLISH);
        assertNotNull(message);
        log.warn(message);
        message = messageSource.getMessage("errors.new.notValid.document.hit",null, Locale.KOREAN);
        assertNotNull(message);
        log.warn(message);

    }
}
