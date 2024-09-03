package com.example.project_sem_4.repository;

import com.example.project_sem_4.object.Users;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Object> {
    @Query("SELECT u FROM Users u WHERE u.username = :username")
    Users login(String username);
}
