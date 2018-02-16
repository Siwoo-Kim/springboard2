package com.springboard.project.service;

import com.springboard.project.domain.Document;
import com.springboard.project.repository.DocumentRepository;
import com.springboard.project.validator.DocumentValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Errors;

import java.util.List;

@Service @Transactional(readOnly = true)
public class DocumentServiceImpl implements DocumentService {

    @Autowired
    DocumentValidator documentValidator;
    @Autowired
    DocumentRepository documentRepository;

    @Override @Transactional(readOnly = false)
    public Document post(Document document, Errors errors) {

        documentValidator.validateNew(document,errors);
        boolean valid = !errors.hasErrors();
        if(valid){ documentRepository.save(document); };
        return document;
    }

    @Override @Transactional(readOnly = false)
    public Document edit(Document document, Errors errors) {
        post(document,errors);
        return document;
    }

    @Override
    public Document getDocument(Long id) {
        documentValidator.validateId(id);
        return documentRepository.findById(id).get();
    }

    @Override
    public void deleteById(Long id, Errors errors) {

    }

    @Override
    public List<Document> getDocuments() {
        return documentRepository.findAll();
    }
}
