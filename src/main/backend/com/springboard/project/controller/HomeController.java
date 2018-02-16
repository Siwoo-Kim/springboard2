package com.springboard.project.controller;

import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Log
@Controller
@RequestMapping({"/","/home","/index"})
public class HomeController {

    @Value("${view.home}") private String homeView;

    @GetMapping
    public String home(){
        return homeView;
    }


}
