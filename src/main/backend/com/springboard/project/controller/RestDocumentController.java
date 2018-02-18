package com.springboard.project.controller;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.springboard.project.domain.Document;
import com.springboard.project.domain.ErrorCode;
import com.springboard.project.service.DocumentService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.java.Log;
import org.apache.tomcat.jni.Local;
import org.dom4j.DocumentException;
import org.hibernate.service.spi.InjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.BindingResultUtils;
import org.springframework.validation.Errors;
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
    public List<Document> getDocuments(){
        return documentService.getDocuments();
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
