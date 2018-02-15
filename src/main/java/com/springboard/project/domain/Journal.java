package com.springboard.project.domain;

import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity @Table(name="sb_journal")
@Getter @Setter @ToString @Builder
@NoArgsConstructor @AllArgsConstructor
@SequenceGenerator(
        name = "spring_journal_generator",
        initialValue = 1,
        allocationSize = 1,
        sequenceName = "journal_seq")
public class Journal {

    @Id @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "spring_journal_generator")
    @Column(name="journal_id")
    private Long id;

    @NotNull
    @Length(min=5,max=80)
    private String title;

    @NotNull
    @Length(min=10,max=800)
    private String text;

    @NotNull
    private String writer;

    @Builder.Default
    private LocalDate postDate = LocalDate.now();

    @Builder.Default
    private int hit = 0;

}
