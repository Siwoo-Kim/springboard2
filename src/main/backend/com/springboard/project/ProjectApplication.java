package com.springboard.project;

import com.springboard.project.domain.Document;
import com.springboard.project.domain.Member;
import com.springboard.project.domain.Review;
import com.springboard.project.repository.DocumentRepository;
import com.springboard.project.repository.MemberRepositoiry;
import com.springboard.project.repository.ReviewRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

@Slf4j
@SpringBootApplication
public class ProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}

	@Bean
	CommandLineRunner addDocuments(DocumentRepository documentRepository){
		return args -> {
			IntStream.range(0,10).forEach(i ->{documentRepository.saveAll(createDocuments());});
		};
	}

	@Bean
	CommandLineRunner addReviews(DocumentRepository documentRepository, ReviewRepository reviewRepository, MemberRepositoiry memberRepositoiry){
		return args -> {

			Member member = new Member();
			member.setName("anonymous");
			memberRepositoiry.save(member);

			List<Document> allDocuments = documentRepository.findAll();
			for(Document document : allDocuments) {
				List<Review> reviewList = Arrays.asList(
						new Review("This is nice document! I want be friend of you!",5,null,null),
						new Review("Hello there! Please contact me, example@email.com << ",4,null,null),
						new Review("Wow, this is exactly what I am looking for....",4,null,null),
						new Review("I don't understand what you mean by that",1,null,null),
						new Review("No comments.... haha ... ",0,null,null));

				reviewList.forEach(review -> {
					review.setDocument(document);
					review.setMember(member);

					reviewRepository.save(review);
				});
			}
		};
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
