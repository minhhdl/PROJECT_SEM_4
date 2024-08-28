package com.example.project_sem_4.object;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.time.ZonedDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Book {
    @Id
    private int bookId;
    @Min(value = 1, message = "Category id cannot be empty and cannot be zero")
    private int categoryId;
    @NotNull(message = "Book name cannot be null")
    @NotBlank(message = "Book name cannot be blank")
    @Column(columnDefinition = "nvarchar(50)")
    @Size(max = 50, message = "Book name must not exceed 50 characters")
    private String bookName;
    @Column(columnDefinition = "nvarchar(255)")
    private String author;
    @Column(columnDefinition = "nvarchar(255)")
    private String publisher;
    private double bookPrice;
    @Column(columnDefinition = "nvarchar(max)")
    private String bookDescription;
    @NotNull(message = "Book picture cannot be null")
    @NotBlank(message = "Book picture cannot be blank")
    @Column(columnDefinition = "nvarchar(255)")
    @Size(max = 255, message = "Picture name must not exceed 255 characters")
    private String picture;
    private int readCount;
    private double star;
    @JsonProperty("isFavorite")
    private boolean isFavorite;
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private ZonedDateTime createdAt = ZonedDateTime.now();
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private ZonedDateTime updatedAt;

    // Create relationship
    @ManyToOne
    @JoinColumn(name = "categoryId", insertable = false, updatable = false)
    @JsonIgnore
    private CategoryBook category;

    @OneToMany(mappedBy = "book")
    @JsonIgnore
    private List<CommentBook> commentBooks;

    public Book(String bookName, int categoryId, String author, String publisher, double bookPrice, String bookDescription,
                String picture, int readCount, double star, boolean isFavorite) {
        this.categoryId = categoryId;
        this.bookName = bookName;
        this.author = author;
        this.publisher = publisher;
        this.bookPrice = bookPrice;
        this.bookDescription = bookDescription;
        this.picture = picture;
        this.readCount = readCount;
        this.star = star;
        this.isFavorite = isFavorite;
    }
}
