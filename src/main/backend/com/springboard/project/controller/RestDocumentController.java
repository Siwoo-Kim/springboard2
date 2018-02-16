package com.springboard.project.controller;

import com.springboard.project.domain.Document;
import com.springboard.project.service.DocumentService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.java.Log;
import org.dom4j.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.validation.BindingResult;
import org.springframework.validation.BindingResultUtils;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Log
@RestController
@RequestMapping("/api/document")
public class RestDocumentController {

    @Autowired
    DocumentService documentService;

    @GetMapping("/{id}")
    public Document getDocument(@PathVariable Long id){
        return documentService.getDocument(id);
    }

    @GetMapping
    public List<Document> getDocuments(){
        return documentService.getDocuments();
    }

    @NoArgsConstructor
    @AllArgsConstructor @Getter @Setter
    public static class ErrorCode{
        String errorCode;
        String message;

    }

    @PostMapping
    public Object postDocument(
            @Valid @RequestBody Document document,
            BindingResult bindingResult,
            HttpServletResponse response
    ){
        Document savedDocument = documentService.post(document,bindingResult);
        if(bindingResult.hasErrors()){
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            List<ErrorCode> errorCodes = new ArrayList<>();

            bindingResult.getAllErrors().forEach(error -> {
                errorCodes.add(new ErrorCode(error.getCode(),error.getDefaultMessage()));
            });

            return errorCodes;
        }

        return savedDocument;
    }
/*
    public List<ErrorCode> handleErrors(Errors errors){
        List<ErrorCode> errorCodes = new ArrayList<>();
        errors.getAllErrors().forEach(error -> {
            errorCodes.add(error.getCode(),error.getDefaultMessage());
        });
        return errorCodes;
    }*/
}
