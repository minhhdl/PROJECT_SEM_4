package com.example.project_sem_4.repository;

import com.example.project_sem_4.object.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Object> {
    @Query("SELECT b FROM Book b WHERE b.updatedAt IS NOT NULL")
    List<Book> getBookUpdated();
}
