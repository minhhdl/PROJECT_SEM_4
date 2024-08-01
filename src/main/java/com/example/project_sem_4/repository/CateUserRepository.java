package com.example.project_sem_4.repository;

import com.example.project_sem_4.object.CategoryUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CateUserRepository extends JpaRepository<CategoryUser, Object> {
}
