package com.springboard.project.repository;

import com.springboard.project.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepositoiry extends JpaRepository<Member,Long>{
}
