package com.springboard.project.service;

import com.springboard.project.domain.ModelCode;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ModelCodeService {

    ModelCode findByCode(String code);
    List<ModelCode> findAll();
    ModelCode findByName(String name);

}
