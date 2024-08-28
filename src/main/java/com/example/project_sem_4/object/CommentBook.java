package com.example.project_sem_4.object;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.time.ZonedDateTime;

@Entity
@Data
@NoArgsConstructor
public class CommentBook {
    @Id
    private int commentId;
    @Min(value = 1, message = "Book id cannot be empty and cannot be zero")
    private int bookId;
    @Min(value = 1, message = "User id cannot be empty and cannot be zero")
    private int userId;
    @NotNull(message = "Content comment cannot be null")
    @NotBlank(message = "Content comment cannot be blank")
    @Column(columnDefinition = "nvarchar(max)")
    private String contents;
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private ZonedDateTime createdAt = ZonedDateTime.now();
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private ZonedDateTime updatedAt;

    // Create relationship
    @ManyToOne
    @JoinColumn(name = "bookId", insertable = false, updatable = false)
    @JsonIgnore
    private Book book;

    @ManyToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    @JsonIgnore
    private Users user;

    public CommentBook(int bookId, int userId, String contents) {
        this.bookId = bookId;
        this.userId = userId;
        this.contents = contents;
    }
}
