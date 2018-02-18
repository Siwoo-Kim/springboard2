package com.springboard.project.controller;

import com.springboard.project.domain.Document;
import com.springboard.project.domain.ErrorCode;
import com.springboard.project.service.DocumentService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.inject.Provider;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Log
@RestController
@RequestMapping("/api/document")
public class RestDocumentController extends AbstractController {

    @Autowired
    DocumentService documentService;
    @Inject Provider<ErrorCode> errorCodeProvider;

    @GetMapping("/{id}")
    public Document getDocument(@PathVariable Long id){
        return documentService.getDocument(id);
    }

    @GetMapping
    public Object getDocuments(
            @PageableDefault(
                    size = 8,
                    page = 0,
                    direction = Sort.Direction.DESC,
                    sort = {"postDate","id"})
            Pageable pageable,
            Locale locale
            ){
        log.warning(pageable.toString());
        BeanPropertyBindingResult errors = new BeanPropertyBindingResult(pageable,"pageable");
        Page<Document> documentPage = documentService.getDocuments(pageable,errors);

        if(!errors.hasErrors()){ return documentPage; }
        return handleErrors(errors,locale);
    }

    @PostMapping
    public Object postDocument(
            @Valid @RequestBody Document document,
            BindingResult bindingResult,
            HttpServletResponse response,
            Locale locale
    ){
        Document savedDocument = documentService.post(document,bindingResult);
        if(bindingResult.hasErrors()){
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return handleErrors(bindingResult,locale);
        }

        return savedDocument;
    }


}














