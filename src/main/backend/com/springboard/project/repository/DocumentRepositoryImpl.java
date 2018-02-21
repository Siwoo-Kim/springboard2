package com.springboard.project.repository;

import com.springboard.project.domain.Document;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Set;

public class DocumentRepositoryImpl implements CustomDocumentRepository {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Document> findByTagName() {

        return null;


    }
}
