package com.springboard.project.service;

import com.springboard.project.domain.ModelCode;
import com.springboard.project.repository.ModelCodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModelCodeServiceImpl implements ModelCodeService{

    @Autowired ModelCodeRepository modelCodeRepository;


    @Override
    public ModelCode findByCode(String code) {
        return modelCodeRepository.findByCode(code);
    }

    @Override
    public List<ModelCode> findAll() {
        return modelCodeRepository.findAll();
    }

    @Override
    public ModelCode findByName(String name) {
        return modelCodeRepository.findByName(name);
    }

}
