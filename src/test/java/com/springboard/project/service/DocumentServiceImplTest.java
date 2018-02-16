package com.springboard.project.service;

import com.springboard.project.domain.Document;
import com.springboard.project.exception.DocumentNotFoundException;
import com.springboard.project.repository.DocumentRepository;
import lombok.extern.java.Log;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.MessageSource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BeanPropertyBindingResult;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.fail;

@Log
@Transactional
@SpringBootTest @RunWith(SpringRunner.class)
public class DocumentServiceImplTest {

    @Autowired
    DocumentService documentService;
    @Autowired
    DocumentRepository documentRepository;

    @Test
    public void post(){
        Document document1 = createJournal();
        BeanPropertyBindingResult errors = new BeanPropertyBindingResult(document1,"journal");
        documentService.post(document1,errors);

        assertThat(document1,is(documentRepository.findById(document1.getId()).get()));
        assertThat(errors.hasErrors(),is(false));

        Document document2 = createJournal();
        document2.setHit(1);
        documentService.post(document2,errors);

        assertThat(errors.hasErrors(),is(true));
        assertThat("New journal cannot exceed 0",errors.getFieldError("hit").getCode(),is("errors.notValid.hit.journal"));
    }

    @Test(expected = DocumentNotFoundException.class)
    public void getJournal(){
        Document document1 = createJournal();
        documentService.post(document1,new BeanPropertyBindingResult(document1,"journal"));

        Document foundDocument1 = documentService.getDocument(document1.getId());
        assertThat(document1,is(foundDocument1));

        Document fouDocument2 = documentService.getDocument(9999L);
        fail("Expect DocumentNotFoundException");
    }

    @Autowired
    MessageSource messageSource;



    public static Document createJournal() {
        Document document = new Document();
        document.setTitle("dummy title");
        document.setText("dummy text");
        document.setWriter("writer1");
        return document;
    }
}
