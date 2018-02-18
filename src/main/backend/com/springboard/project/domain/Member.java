package com.springboard.project.domain;


import lombok.*;
import javax.persistence.*;


@Entity @Table(name="sb_member")
@Getter @Setter @ToString @Builder
@NoArgsConstructor
@AllArgsConstructor
@SequenceGenerator(
        name = "spring_member_generator",
        initialValue = 1,
        allocationSize = 1,
        sequenceName = "member_seq")
public class Member {

    @Id @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "spring_member_generator")
    @Column(name="member_id")
    private Long id;

    private String name;

}
