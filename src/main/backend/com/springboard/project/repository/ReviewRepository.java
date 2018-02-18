package com.springboard.project.repository;

import com.springboard.project.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review,Long> {

    List<Review> findByDocumentId(Long documentId);
}
