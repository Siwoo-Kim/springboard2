package com.springboard.project.repository;

import com.springboard.project.domain.ModelCode;
import org.springframework.ui.Model;

import java.util.List;
import java.util.Optional;

public interface ModelCodeRepository {

    ModelCode findByCode(String code);
    List<ModelCode> findAll();
    ModelCode findByName(String name);
    boolean existsByName(String name);
}
