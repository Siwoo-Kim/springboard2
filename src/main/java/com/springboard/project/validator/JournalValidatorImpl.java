package com.springboard.project.validator;

import com.springboard.project.domain.Journal;
import com.springboard.project.exception.JournalNotFoundException;
import com.springboard.project.repository.JournalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.BindingResultUtils;
import org.springframework.validation.Errors;

import javax.validation.Valid;

@Validator
public class JournalValidatorImpl implements JournalValidator {

    @Autowired JournalRepository journalRepository;

    @Override
    public void validateId(Long id) {
        if(!journalRepository.existsById(id)){
            throw new JournalNotFoundException("Journal[id:"+id+"] not found","error.notFound.journal.id");
        }
    }

    @Override
    public void validateNew(Journal journal, Errors errors) {
        if(journal.getHit() > 0){
            errors.rejectValue("hit","errors.notValid.hit.journal","Hit of new journal should be 0");
        }
    }
}
