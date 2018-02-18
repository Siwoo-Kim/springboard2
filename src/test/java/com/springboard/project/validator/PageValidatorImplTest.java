package com.springboard.project.validator;

import com.springboard.project.domain.Document;
import com.springboard.project.domain.Review;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.validation.BeanPropertyBindingResult;


import static org.junit.Assert.*;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class PageValidatorImplTest {

    @Autowired PageValidator pageValidator;
    @Value("${page.document.maxsize}") int pageDocumentMaxSize;

    @Test
    public void testPageMaxSize(){
        assertNotNull(pageValidator);
        assertTrue(pageDocumentMaxSize== ((PageValidatorImpl)pageValidator).getPageDocumentMaxSize());
    }

    @Test
    public void validatePage(){
        Pageable pageable = PageRequest.of(10,100);
        BeanPropertyBindingResult errors = new BeanPropertyBindingResult(pageable,"pageable");

        pageValidator.validatePage(pageable,errors,Document.class);

        assertTrue("PageSize should not exceed 100",errors.hasErrors());
        log.warn(errors.getFieldError().getCode());

        pageable = PageRequest.of(10,99);
        errors = new BeanPropertyBindingResult(pageable,"pageable");
        //pageValidator.validatePage(pageable,errors, Review.class);
        pageValidator.validatePage(pageable,errors,Document.class);
        assertFalse(errors.hasErrors());


    }
}
