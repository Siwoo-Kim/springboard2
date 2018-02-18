package com.springboard.project.repository;

import com.springboard.project.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review,Long> {

    List<Review> findByDocumentId(Long documentId);
    @Query("select avg(r.rating) from Review r where r.document.id = ?1")
    Double findRatingByDocumentId(Long documentId);

}
