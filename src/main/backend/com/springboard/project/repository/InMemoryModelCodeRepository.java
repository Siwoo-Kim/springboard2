package com.springboard.project.repository;

import com.springboard.project.domain.ModelCode;
import com.springboard.project.exception.ModelCodeNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;

@Slf4j
@Repository
public class InMemoryModelCodeRepository implements ModelCodeRepository {

    @Autowired List<ModelCode> modelCodes;

    @Override
    public ModelCode findByCode(String code) {
        boolean valid = false;

        Optional<ModelCode> foundModelCode = null;
        if(!StringUtils.isEmpty(code) ){
             foundModelCode = modelCodes.stream()
                    .filter(modelCode -> modelCode.getCode().equals(code))
                    .findFirst();
             if(foundModelCode.isPresent()){ valid = true; }
        }

        if(valid){ return foundModelCode.get(); }
        else throw new ModelCodeNotFoundException("ModelCode[code:"+code+"] not found", "errors.notFound.modelCode.code");
    }

    @Override
    public List<ModelCode> findAll() {
        return modelCodes;
    }

    @Override
    public ModelCode findByName(String name) {
        boolean valid = false;
        Optional<ModelCode> foundModel = null;

        String upperName = name.toUpperCase();
        if(!StringUtils.isEmpty(name)){
            foundModel = modelCodes
                    .stream()
                    .filter(modelCode -> modelCode.getName().toUpperCase().equals(upperName))
                    .findFirst();
            if(foundModel.isPresent()) { valid = true; }
        }

        if(valid) return foundModel.get();
        else throw new ModelCodeNotFoundException("ModelCode[name:"+name+"] not found","error.notFound.modelCode.name");
    }

    @Override
    public boolean existsByName(String name) {
        return !ObjectUtils.isEmpty( findByName(name) );
    }


}
