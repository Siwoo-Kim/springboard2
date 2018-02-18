package com.springboard.project.validator;

import com.springboard.project.domain.Review;
import org.springframework.validation.Errors;

public interface ReviewValdiator {

    void valdateId(Long id);
    void valdateId(Long id,Errors errors);
    void validateNew(Review review,Errors errors);

}
