package com.springboard.project.service;

import com.springboard.project.domain.Journal;
import com.springboard.project.exception.JournalNotFoundException;
import com.springboard.project.repository.JournalRepository;
import lombok.extern.java.Log;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.MessageSource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BeanPropertyBindingResult;

import java.util.Locale;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.fail;

@Log
@Transactional
@SpringBootTest @RunWith(SpringRunner.class)
public class JournalServiceImplTest {

    @Autowired JournalService journalService;
    @Autowired JournalRepository journalRepository;

    @Test
    public void post(){
        Journal journal1 = createJournal();
        BeanPropertyBindingResult errors = new BeanPropertyBindingResult(journal1,"journal");
        journalService.post(journal1,errors);

        assertThat(journal1,is(journalRepository.findById(journal1.getId()).get()));
        assertThat(errors.hasErrors(),is(false));

        Journal journal2 = createJournal();
        journal2.setHit(1);
        journalService.post(journal2,errors);

        assertThat(errors.hasErrors(),is(true));
        assertThat("New journal cannot exceed 0",errors.getFieldError("hit").getCode(),is("errors.notValid.hit.journal"));
    }

    @Test(expected = JournalNotFoundException.class)
    public void getJournal(){
        Journal journal1 = createJournal();
        journalService.post(journal1,new BeanPropertyBindingResult(journal1,"journal"));

        Journal foundJournal1 = journalService.getJournal(journal1.getId());
        assertThat(journal1,is(foundJournal1));

        Journal fouJournal2  = journalService.getJournal(9999L);
        fail("Expect JournalNotFoundException");
    }

    @Autowired
    MessageSource messageSource;



    public static Journal createJournal() {
        Journal journal = new Journal();
        journal.setTitle("dummy title");
        journal.setText("dummy text");
        journal.setWriter("writer1");
        return journal;
    }
}
