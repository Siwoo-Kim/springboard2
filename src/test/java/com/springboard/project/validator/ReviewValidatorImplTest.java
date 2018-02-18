package com.springboard.project.validator;

import com.springboard.project.domain.Document;
import com.springboard.project.domain.Member;
import com.springboard.project.domain.Review;
import com.springboard.project.exception.ReviewNotFoundException;
import com.springboard.project.repository.ReviewRepository;
import com.springboard.project.service.ReviewService;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BeanPropertyBindingResult;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import static com.springboard.project.service.DocumentServiceImplTest.createDocument;
import static com.springboard.project.service.ReviewServiceImplTest.createReviews;
import static org.junit.Assert.*;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class ReviewValidatorImplTest {

    @Autowired ReviewValdiator reviewValdiator;
    @Autowired ReviewService reviewService;
    @Autowired ReviewRepository reviewRepository;
    @PersistenceContext EntityManager entityManager;

    @Test(expected = ReviewNotFoundException.class)
    public void valdiateId(){
        Document document = createDocument();
        entityManager.persist(document);
        Member member = new Member();
        entityManager.persist(member);

        List<Review> reviews = createReviews(document,member);
        Review savedReview = reviewRepository.save(reviews.get(0));

        BeanPropertyBindingResult errors = new BeanPropertyBindingResult(reviews.get(0),"review");
        reviewValdiator.valdateId(savedReview.getId(),errors);

        assertFalse(errors.hasErrors());

        long notExistingId = 99999L;
        Review notValidReivew = new Review("comments",0,null,null);
        notValidReivew.setId(notExistingId);
        errors = new BeanPropertyBindingResult(notValidReivew,"review");
        reviewValdiator.valdateId(notExistingId,errors);

        assertTrue(errors.hasErrors());
        log.warn(errors.getFieldError().getCode());

        reviewValdiator.valdateId(notExistingId);
        fail();
    }
}
