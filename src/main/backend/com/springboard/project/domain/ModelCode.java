package com.springboard.project.domain;

import lombok.*;
import org.springframework.context.annotation.ComponentScan;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.time.LocalDate;

@Getter @Setter @ToString @Builder
@NoArgsConstructor
@AllArgsConstructor
public class ModelCode {

    @Id
    private String code;

    private String name;

    private String description;

    @Builder.Default
    private LocalDate createDate = LocalDate.now();

    private LocalDate lastUpdatedContent;


}
