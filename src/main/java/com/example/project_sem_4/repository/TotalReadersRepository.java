package com.example.project_sem_4.repository;

import com.example.project_sem_4.object.TotalReaders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TotalReadersRepository extends JpaRepository<TotalReaders, Object> {
}
