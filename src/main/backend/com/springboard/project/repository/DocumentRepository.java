package com.springboard.project.repository;

import com.springboard.project.domain.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<Document,Long> {



}
