package com.springboard.project.controller;

import com.springboard.project.domain.ErrorCode;
import com.springboard.project.domain.ModelCode;
import com.springboard.project.exception.ModelCodeNotFoundException;
import com.springboard.project.service.ModelCodeService;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.inject.Provider;
import java.util.List;
import java.util.Locale;

@Slf4j
@RestController
@RequestMapping("/api/modelcode")
public class RestModelCodeController {

    @Autowired ModelCodeService modelCodeService;
    @Inject Provider<ErrorCode> errorCodeProvider;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ModelCode> modelCodes(){
        return modelCodeService.findAll();
    }

    @GetMapping("/code/{modelCode}")
    @ResponseStatus(HttpStatus.OK)
    public ModelCode modelCode(@PathVariable String modelCode){
        return modelCodeService.findByCode(modelCode);
    }

    @GetMapping("/{name}")
    @ResponseStatus(HttpStatus.OK)
    public ModelCode modelCodeByName(@PathVariable String name){
        return modelCodeService.findByName(name);
    }


    @ExceptionHandler(ModelCodeNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorCode modelCodeNotFoundExceptionHandler(ModelCodeNotFoundException e, Locale locale){
        log.warn(locale.toString());
        ErrorCode errorCode = errorCodeProvider.get();
        errorCode.setLocale(locale);
        errorCode.setErrorCode("errors.notFound.modelCode.code");
        return errorCode;
    }


}
