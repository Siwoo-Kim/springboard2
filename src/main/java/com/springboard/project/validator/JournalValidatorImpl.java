package com.springboard.project.validator;

import com.springboard.project.exception.JournalNotFoundException;
import com.springboard.project.repository.JournalRepository;
import org.springframework.beans.factory.annotation.Autowired;

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
}
