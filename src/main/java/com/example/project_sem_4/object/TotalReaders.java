package com.example.project_sem_4.object;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.*;
import lombok.*;

import java.time.ZonedDateTime;

@Entity
@Data
@NoArgsConstructor
public class TotalReaders {
    @Id
    private int totalId;
    @Min(value = 1, message = "Book id cannot be empty and cannot be zero")
    private int bookId;
    @Min(value = 1, message = "User id cannot be empty and cannot be zero")
    private int userId;
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private ZonedDateTime createdAt = ZonedDateTime.now();
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private ZonedDateTime updatedAt;

    // Create relationship
    @ManyToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    @JsonIgnore
    private Users user;

    @ManyToOne
    @JoinColumn(name = "bookId", insertable = false, updatable = false)
    @JsonIgnore
    private Book book;

    public TotalReaders(int bookId, int userId) {
        this.bookId = bookId;
        this.userId = userId;
    }
}
