package com.springboard.project.controller;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.springboard.project.domain.ErrorCode;
import com.springboard.project.domain.Review;
import com.springboard.project.service.ReviewService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;
import java.util.Locale;

@Slf4j
@RestController
@RequestMapping("/api/review")
public class RestReviewController extends AbstractController{

    @Autowired ReviewService reviewService;

    @GetMapping("/document/{documentId}")
    public List<Review> getReviewsByDocument(@PathVariable Long documentId){
        return reviewService.getReviewByDocumentId(documentId);
    }

    @PostMapping
    public Object addReview(
            @Valid @RequestBody Review review,
            BindingResult bindingResult,
            HttpServletResponse response,
            Locale locale
    ){
        log.warn(review.toString());
        Review savedReview = reviewService.addReview(review,bindingResult);
        if(bindingResult.hasErrors()){
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return handleErrors(bindingResult,locale);
        }
        return savedReview;
    }

    /*
        Json intercept the binding error because of setter in Review
        I hardcode to manipulate the JsonMappingException
    */
    @ExceptionHandler(JsonMappingException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public List<ErrorCode> handleJsonMappingException(JsonMappingException e, Locale locale){
        String message = e.getMessage();
        if(message.contains("rating:")){
            BeanPropertyBindingResult errors = new BeanPropertyBindingResult(new Review(null,0,null,null),"rating");
            errors.rejectValue("rating","errors.new.notValid.review.rating");
            return handleErrors(errors,locale);
        }
        return null;
    }

}
