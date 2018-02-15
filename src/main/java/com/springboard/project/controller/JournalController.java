package com.springboard.project.controller;

import com.springboard.project.service.JournalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/journal")
public class JournalController {

    @Value("${view.journal.list}") private String listView;

    @Autowired JournalService journalService;

    @GetMapping
    public String journals(Model model){
        model.addAttribute(journalService.getJournals());
        return listView;
    }
}
