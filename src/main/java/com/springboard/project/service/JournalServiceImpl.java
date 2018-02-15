package com.springboard.project.service;

import com.springboard.project.domain.Journal;
import com.springboard.project.repository.JournalRepository;
import com.springboard.project.validator.JournalValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.BindingResultUtils;
import org.springframework.validation.Errors;

@Service @Transactional(readOnly = true)
public class JournalServiceImpl implements JournalService {

    @Autowired JournalValidator journalValidator;
    @Autowired JournalRepository journalRepository;

    @Override @Transactional(readOnly = false)
    public Journal post(Journal journal, Errors errors) {
        boolean valid = !errors.hasErrors();
        if(valid){ journalRepository.save(journal); };
        return journal;
    }

    @Override @Transactional(readOnly = false)
    public Journal edit(Journal journal, Errors errors) {
        post(journal,errors);
        return journal;
    }

    @Override
    public Journal getJournal(Long id) {
        journalValidator.validateId(id);
        return null;
    }

    @Override
    public void deleteById(Long id, Errors errors) {

    }

    @Override
    public Journal getAll() {
        return null;
    }
}
