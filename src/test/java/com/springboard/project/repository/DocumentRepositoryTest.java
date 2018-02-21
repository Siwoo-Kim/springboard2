package com.springboard.project.repository;

import com.springboard.project.domain.Document;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class DocumentRepositoryTest {

    @Autowired DocumentRepository documentRepository;

    @Test
    public void testFindByTagName(){
        String searchTagName = "MySpecialTagName";
        List<Document> documents = createDocuments();
        documents.get(0).getTags().clear();
        documents.get(0).getTags().add(searchTagName);

        documentRepository.saveAll(documents);

        List<Document> foundDocuments = documentRepository.findByTagName(searchTagName);
        foundDocuments.stream().map(Document::toString).forEach(log::warn);
        foundDocuments.stream().map(Document::getTags).forEach(list -> log.warn("Hash Tagname? list.contains(searchTagName)"));

    }

    public static List<Document> createDocuments(){
        List<Document> documents = Arrays.asList(
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
                        .isSecret(true)
                        .tags(Stream.of("ztag1","ztag2","ztag3").collect(Collectors.toList()))
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
                        .isSecret(false)
                        .tags(Stream.of("ttag1","ttag2","ttag3").collect(Collectors.toList()))
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
                        .isSecret(true)
                        .tags(Stream.of("etag1","etag2","etag3").collect(Collectors.toList()))
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
                        .isSecret(false)
                        .tags(Stream.of("otag1","otag2","otag3").collect(Collectors.toList()))
                        .build()
        );

        documents.get(0).setTags(Stream.of("atag1","atag2","atag3").collect(Collectors.toList()));
        documents.get(1).setTags(Stream.of("btag1","btag2","btag3").collect(Collectors.toList()));
        documents.get(2).setTags(Stream.of("ctag1","ctag2","ctag3").collect(Collectors.toList()));
        documents.get(3).setTags(Stream.of("dtag1","dtag2","dtag3").collect(Collectors.toList()));
        return documents;
    }
}
