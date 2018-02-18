package com.springboard.project.service;

import com.springboard.project.domain.Review;
import com.springboard.project.repository.ReviewRepository;
import com.springboard.project.validator.DocumentValidator;
import com.springboard.project.validator.ReviewValdiator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Errors;

import java.util.List;

@Service @Transactional(readOnly = true)
public class ReviewServiceImpl implements ReviewService{

    @Autowired ReviewRepository reviewRepository;
    @Autowired DocumentService documentService;
    @Autowired DocumentValidator documentValidator;
    @Autowired ReviewValdiator reviewValdiator;

    @Override @Transactional(readOnly = false)
    public Review addReview(Review review, Errors errors) {
        boolean valid = false;
        documentService.getDocument(review.getDocument().getId());
        reviewValdiator.validateNew(review,errors);
        valid = !errors.hasErrors();

        return valid ? reviewRepository.save(review) : review;
    }

    @Override @Transactional(readOnly = false)
    public void removeReview(Long id) {

    }

    @Override
    public List<Review> getReviewByDocumentId(Long documentId) {
        return reviewRepository.findByDocumentId(documentId);
    }

    @Override
    public Double getDocumentRating(Long documentId) {
        documentValidator.validateId(documentId);
        return reviewRepository.findRatingByDocumentId(documentId);
    }

    @Override
    public Review getReview(Long id) {
        reviewValdiator.valdateId(id);
        return reviewRepository.findById(id).get();
    }
}
