package com.springboard.project.domain;

import com.springboard.project.domain.converter.BooleanToYNConverter;
import com.springboard.project.exception.DocumentTagSizeExceedException;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.repository.cdi.Eager;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity @Table(name="sb_document")
@Getter @Setter @ToString @Builder
@NoArgsConstructor @AllArgsConstructor
@SequenceGenerator(
        name = "spring_document_generator",
        initialValue = 1,
        allocationSize = 1,
        sequenceName = "document_seq")
public class Document {

    @Id @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "spring_document_generator")
    @Column(name="document_id")
    private Long id;

    @NotNull
    @Length(min=5,max=80)
    private String title;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
            name="sb_document_tags",
            joinColumns = @JoinColumn(name="document_id"))
    @Column(name="tags") @Builder.Default
    private List<String> tags = new ArrayList<>();

    @Convert(converter = BooleanToYNConverter.class)
    @Builder.Default
    private boolean isSecret = false;

    @NotNull
    @Length(min=10,max=800)
    private String text;

    @NotNull
    private String writer;

    @Builder.Default
    private LocalDate postDate = LocalDate.now();

    @Builder.Default
    private int hit = 0;

    public void setTags(List tags){
        validateTags(tags);
        this.tags = tags;
    }

    public void addTag(String tagName){
        validateTags(this.tags);

        if(StringUtils.hasText(tagName)){
            this.tags.add(tagName);
        }
    }

    public void validateTags(List tags){
        if(tags.size() > 3){
            throw new DocumentTagSizeExceedException("Document[tags:"+tags.size()+"] not valid","errors.invalid.document.tags.size");
        }
    }

}
