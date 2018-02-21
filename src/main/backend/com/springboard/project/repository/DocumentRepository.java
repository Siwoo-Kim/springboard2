package com.springboard.project.repository;

import com.springboard.project.domain.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DocumentRepository extends JpaRepository<Document,Long>, CustomDocumentRepository{

    List<Document> findByIsSecretEquals(boolean isSecret);

    @Query(
            nativeQuery = true,
            value = "select document_id " +
                    "from sb_document " +
                    "where document_id " +
                    "in (select t.document_id " +
                    "   from sb_document_tags t " +
                    "where document_id = t.document_id " +
                    "and t.tags like ?1) ")
    List<Document> findByTagName(String tagName);

}
