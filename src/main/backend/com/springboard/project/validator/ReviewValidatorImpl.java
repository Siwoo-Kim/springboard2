package com.springboard.project.validator;

import com.springboard.project.domain.Review;
import com.springboard.project.exception.ReviewNotFoundException;
import com.springboard.project.exception.ReviewRatingException;
import com.springboard.project.repository.ReviewRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.validation.Errors;

@Slf4j
@Validator @Transactional(readOnly = true)
public class ReviewValidatorImpl implements ReviewValdiator{

    @Autowired ReviewRepository reviewRepository;
    @Autowired DocumentValidator documentValidator;

    @Override
    public void valdateId(Long id) {
            /*reviewRepository.existsById() does not work*/
        if(!reviewRepository.existsById(id)){
            throw new ReviewNotFoundException("Review[id"+id+"] not found","errors.notFound.review.id");
        }
    }

    @Override
    public void valdateId(Long id, Errors errors) {
        try{
            valdateId(id);
        }catch (ReviewNotFoundException e){
            errors.rejectValue("id","errors.notFound.review.id");
        }
    }

    @Override
    public void validateNew(Review review, Errors errors) {
        documentValidator.validateId(review.getDocument().getId());

        if(!ObjectUtils.isEmpty( review.getId() )){
            errors.rejectValue("id","errors.new.notValid.review.id");
        }
        try {
            review.validateRating();
        }catch (ReviewRatingException e){
            errors.rejectValue("rating","errors.new.notValid.review.rating");
        }
    }
}
