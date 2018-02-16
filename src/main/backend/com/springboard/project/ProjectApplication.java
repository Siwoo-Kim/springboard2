package com.springboard.project;

import com.springboard.project.domain.Document;
import com.springboard.project.repository.DocumentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class ProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}

	@Bean
	CommandLineRunner addJournals(DocumentRepository documentRepository){
		return args -> {
			documentRepository.saveAll(Arrays.asList(
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
							.build()));
		};
	}


}
