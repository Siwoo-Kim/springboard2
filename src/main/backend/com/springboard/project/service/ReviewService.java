package com.springboard.project.service;

import com.springboard.project.domain.Document;
import com.springboard.project.domain.Review;
import org.springframework.validation.Errors;

import java.util.List;

public interface ReviewService {

    Review addReview(Review review, Errors errors);
    void removeReview(Long id);
    List<Review> getReviewByDocumentId(Long documentId);
    Review getReview(Long id);

}
