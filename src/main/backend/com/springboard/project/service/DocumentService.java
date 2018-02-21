package com.springboard.project.service;

import com.springboard.project.domain.Document;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import java.util.List;

public interface DocumentService {

    Document post(Document document, Errors errors);
    Document edit(Document document, Errors errors);
    Document getDocument(Long id);
    List<Document> getDocumentByTagName(String tagName, Errors errors);

    void deleteById(Long id, Errors errors);
    List<Document> getDocuments();
    /*if pageable is not valid, return null, otherwise retrieve data*/
    Page<Document> getDocuments(Pageable pageable, Errors errors);
}
