package com.springboard.project.repository;

import com.springboard.project.domain.Document;

import java.util.List;

public interface CustomDocumentRepository {

    List<Document> findByTagName();

}
