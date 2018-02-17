package com.springboard.project.repository;

import com.springboard.project.domain.ModelCode;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import static org.junit.Assert.*;

@Slf4j
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class InMemoryModelCodeRepositoryTest {

    @Autowired ModelCodeRepository inMemoryModelCodeRepository;
    private static final String HOME_CODE = "mc-001";
    private static final String DOCUMENT_CODE = "mc-002";
    private static final String USER_CODE = "mc-003";

    @Test
    public void testFindByCode(){

        assertNotNull( inMemoryModelCodeRepository.findByCode(HOME_CODE) );
        assertNotNull( inMemoryModelCodeRepository.findByCode(DOCUMENT_CODE) );
        assertNotNull( inMemoryModelCodeRepository.findByCode(USER_CODE) );
        assertNotNull( inMemoryModelCodeRepository.findByName("home") );

        inMemoryModelCodeRepository.findAll().stream()
                .map(ModelCode::toString)
                .forEach(log::warn);
    }

}
