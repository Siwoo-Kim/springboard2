package com.springboard.project.service;

import com.springboard.project.domain.Document;
import com.springboard.project.domain.Member;
import com.springboard.project.domain.Review;
import com.springboard.project.exception.ReviewRatingException;
import com.springboard.project.repository.DocumentRepository;
import com.springboard.project.repository.ReviewRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BeanPropertyBindingResult;

import javax.persistence.EntityManager;
import java.util.Arrays;
import java.util.List;

import static com.springboard.project.service.DocumentServiceImplTest.createDocument;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.*;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class ReviewServiceImplTest {

    @Autowired ReviewService reviewService;
    @Autowired EntityManager entityManager;
    @Autowired ReviewRepository reviewRepository;
    @Autowired DocumentRepository documentRepository;

    @Test
    public void testAddReview(){
        Document document = createDocument();
        documentRepository.save(document);
        Member member = new Member();
        entityManager.persist(member);

        List<Review> reviews = createReviews(document,member);

        BeanPropertyBindingResult error = new BeanPropertyBindingResult(reviews.get(0),"review");
        Review foundReview = reviewService.addReview(reviews.get(0),error);

        assertThat(error.hasErrors(),is(false));
        assertNotNull(foundReview);
        assertThat(foundReview.getComments(),is("review1"));
        assertThat(foundReview.getRating(),is(3));
        log.warn(foundReview.toString());

        try {
            foundReview.setRating(6);
        }catch (ReviewRatingException e){
            e.printStackTrace();
        }

        Review havingIdReivew = reviews.get(1);
        havingIdReivew.setId(5L);

        error = new BeanPropertyBindingResult(reviews.get(0),"review");
        Review foundReview2 = reviewService.addReview(havingIdReivew,error);

        assertTrue(error.hasErrors());
        error.getAllErrors().stream().forEach(err -> log.warn(err.toString()));
    }

    @Test
    public void testGetReviewsByDocumentId(){
        Document document = createDocument();
        documentRepository.save(document);
        Member member = new Member();
        entityManager.persist(member);

        List<Review> reviews = createReviews(document,member);

        reviewRepository.saveAll(reviews);
        List<Review> foundReview = reviewService.getReviewByDocumentId(document.getId());
        assertNotNull(foundReview);
        assertThat(foundReview.size(),is(5));
        foundReview.stream().map(Review::toString).forEach(log::warn);


    }



    public static List<Review> createReviews(Document document, Member member){
        return Arrays.asList(
                new Review("review1",3,document,member),
                new Review("review2",4,document,member),
                new Review("review3",5,document,member),
                new Review("review4",1,document,member),
                new Review("review5",0,document,member));
    }
}
