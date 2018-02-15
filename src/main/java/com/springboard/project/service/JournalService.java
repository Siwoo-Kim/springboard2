package com.springboard.project.service;

import com.springboard.project.domain.Journal;
import org.springframework.validation.Errors;

public interface JournalService {

    Journal post(Journal journal,Errors errors);
    Journal edit(Journal journal,Errors errors);
    Journal getJournal(Long id);
    void deleteById(Long id,Errors errors);
    Journal getAll();

}
