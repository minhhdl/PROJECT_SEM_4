package com.example.project_sem_4.repository;

import com.example.project_sem_4.object.CategoryBook;
import jakarta.websocket.server.PathParam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CateBookRepository extends JpaRepository<CategoryBook, Integer> {
    @Query("SELECT c FROM CategoryBook c WHERE c.categoryId = :categoryId")
    String getCateBookNameById(@PathParam("categoryId") int categoryId);
}
