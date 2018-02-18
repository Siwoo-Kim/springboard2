package com.springboard.project.domain;


import com.springboard.project.exception.ReviewRatingException;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity @Table(name="sb_reviews")
@Getter @Setter @ToString
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor
@SequenceGenerator(
        name = "spring_review_generator",
        initialValue = 1,
        allocationSize = 1,
        sequenceName = "sb_review_seq")
public class Review {

    @Id @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "spring_review_generator")
    @Column(name="reviews_id")
    private Long id;

    @NotNull @Length(min = 5,max = 200)
    private String comments;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="document_id")
    Document document;

    @ManyToOne
    @JoinColumn(name="member_id")
    Member member;

    private LocalDateTime created = LocalDateTime.now();

    @Column
    private int rating = 0;

    public void setRating(int rating){
        if(rating < 0 || rating > 5){
            throw new ReviewRatingException("Review[rating:"+rating+"] not valid","errors.invalid.review.rating");
        }
        this.rating = rating;
    }

    public void validateRating(){
        setRating(this.rating);
    }

    public Review(String comments, int rating, Document document, Member member) {
        this.comments = comments;
        this.document = document;
        this.member = member;
        this.setRating(rating);
    }
}
