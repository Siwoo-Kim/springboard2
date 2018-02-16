package com.springboard.project.controller;

import com.springboard.project.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/document")
public class DocumentController {

    @Value("${view.document.list}") private String listView;

    @Autowired
    DocumentService documentService;

    @GetMapping
    public String documents(Model model){
        model.addAttribute(documentService.getDocuments());
        return listView;
    }
}
