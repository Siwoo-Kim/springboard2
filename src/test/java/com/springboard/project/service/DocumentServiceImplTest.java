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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BeanPropertyBindingResult;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;

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
        Document document1 = createDocument();
        BeanPropertyBindingResult errors = new BeanPropertyBindingResult(document1,"journal");
        documentService.post(document1,errors);

        assertThat(document1,is(documentRepository.findById(document1.getId()).get()));
        assertThat(errors.hasErrors(),is(false));

        Document document2 = createDocument();
        document2.setHit(1);
        documentService.post(document2,errors);

        assertThat(errors.hasErrors(),is(true));
        assertThat("New journal cannot exceed 0",errors.getFieldError("hit").getCode(),is("errors.new.notValid.document.hit"));
    }

    @Test(expected = DocumentNotFoundException.class)
    public void getJournal(){
        Document document1 = createDocument();
        documentService.post(document1,new BeanPropertyBindingResult(document1,"journal"));

        Document foundDocument1 = documentService.getDocument(document1.getId());
        assertThat(document1,is(foundDocument1));

        Document fouDocument2 = documentService.getDocument(9999L);
        fail("Expect DocumentNotFoundException");
    }

    @Autowired
    MessageSource messageSource;


    @Test
    public void testGetDocumentWithPage(){
        /* Testing the pageable interface */
        List<Document> documents = createDocuments();
        LocalDate mostRecent = LocalDate.of(2020,03,01);
        documents.get(3).setPostDate(mostRecent);
        documentRepository.saveAll(documents);
        Pageable pageable = PageRequest.of(0,1, Sort.by(Sort.Direction.DESC,"postDate","id"));
        Document foundDocument = documentRepository.findAll(pageable).getContent().get(0);

        assertThat(foundDocument.getPostDate(),is(mostRecent));
        log.warning(foundDocument::toString);

        BeanPropertyBindingResult errors = new BeanPropertyBindingResult(pageable,"pageable");
        Page<Document> foundPage = documentService.getDocuments(pageable,errors);
        assertNotNull(foundPage);
        assertTrue(foundPage.getNumberOfElements()==1);


        errors = new BeanPropertyBindingResult(pageable,"pageable");
        pageable = PageRequest.of(0,100, Sort.by(Sort.Direction.DESC,"postDate","id"));
        Page<Document> documentPage = documentService.getDocuments(pageable,errors);
        assertNull(documentPage);
        assertTrue(errors.hasErrors());

        errors = new BeanPropertyBindingResult(pageable,"pageable");
        pageable = PageRequest.of(0,22, Sort.by(Sort.Direction.DESC,"postDate","id"));
        documentPage = documentService.getDocuments(pageable,errors);
        assertNotNull(documentPage);
        assertTrue(documentPage.getNumberOfElements()==22);
        assertFalse(errors.hasErrors());

    }


    public static Document createDocument() {
        Document document = new Document();
        document.setTitle("dummy title");
        document.setText("dummy text");
        document.setWriter("writer1");
        return document;
    }


    public static List<Document> createDocuments(){
        return Arrays.asList(
                Document
                        .builder()
                        .writer("Spring1")
                        .title("ne, production-grade Spring based Applications that you can ")
                        .text("Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can \"just run\". We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration.\n" +
                                "\n" +
                                "Features\n" +
                                "Create stand-alone Spring applications\n" +
                                "Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)\n" +
                                "Provide opinionated 'starter' POMs to simplify your Maven configuration\n" +
                                "Automatically configure Spring whenever possible")
                        .build(),
                Document
                        .builder()
                        .writer("Spring1")
                        .title("ne, production-grade Spring based Applications that you can ")
                        .text("Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can \"just run\". We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration.\n" +
                                "\n" +
                                "Features\n" +
                                "Create stand-alone Spring applications\n" +
                                "Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)\n" +
                                "Provide opinionated 'starter' POMs to simplify your Maven configuration\n" +
                                "Automatically configure Spring whenever possible")
                        .build(), Document
                        .builder()
                        .writer("Spring1")
                        .title("ne, production-grade Spring based Applications that you can ")
                        .text("Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can \"just run\". We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration.\n" +
                                "\n" +
                                "Features\n" +
                                "Create stand-alone Spring applications\n" +
                                "Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)\n" +
                                "Provide opinionated 'starter' POMs to simplify your Maven configuration\n" +
                                "Automatically configure Spring whenever possible")
                        .build(), Document
                        .builder()
                        .writer("Spring1")
                        .title("ne, production-grade Spring based Applications that you can ")
                        .text("Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can \"just run\". We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration.\n" +
                                "\n" +
                                "Features\n" +
                                "Create stand-alone Spring applications\n" +
                                "Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)\n" +
                                "Provide opinionated 'starter' POMs to simplify your Maven configuration\n" +
                                "Automatically configure Spring whenever possible")
                        .build(), Document
                        .builder()
                        .writer("Spring1")
                        .title("ne, production-grade Spring based Applications that you can ")
                        .text("Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can \"just run\". We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration.\n" +
                                "\n" +
                                "Features\n" +
                                "Create stand-alone Spring applications\n" +
                                "Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)\n" +
                                "Provide opinionated 'starter' POMs to simplify your Maven configuration\n" +
                                "Automatically configure Spring whenever possible")
                        .build()
        );
    }
}
