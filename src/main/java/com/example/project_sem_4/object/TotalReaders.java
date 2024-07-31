package com.example.project_sem_4.object;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

import java.time.ZonedDateTime;

@Entity
@Data
public class TotalReaders {
    @Id
    private int totalId;
    private int bookId;
    private int userId;
    private ZonedDateTime createdAt;

    // Create relationship
    @ManyToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    private Users user;

    @ManyToOne
    @JoinColumn(name = "bookId", insertable = false, updatable = false)
    private Book book;
}
