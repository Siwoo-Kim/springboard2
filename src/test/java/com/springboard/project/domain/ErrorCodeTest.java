package com.springboard.project.domain;

import com.springboard.project.RootConfig;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Locale;

import static org.junit.Assert.*;

@Slf4j
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = RootConfig.class)
public class ErrorCodeTest {

    @Autowired ApplicationContext context;


    @Test
    public void testErrorMessage() {
        ErrorCode errorCode = context.getBean(ErrorCode.class);
        errorCode.setErrorCode("errors.new.notValid.document.hit");
        assertNotNull(errorCode);
        assertTrue("오류! 새문서의 hit는 0이여야 합니다.".equals(errorCode.getMessage()));
        log.warn(errorCode.getMessage());

        errorCode.setErrorCode("errors.new.notValid.document.hit");
        errorCode.setLocale(Locale.ENGLISH);
        assertNotNull(errorCode);
        log.warn(errorCode.getMessage());
    }

}
