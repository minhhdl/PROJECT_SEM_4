package com.example.project_sem_4.object;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.time.ZonedDateTime;
import java.util.List;

@Entity
@Data
public class Book {
    @Id
    private int bookId;
    private int categoryId;
    private String bookName;
    private double bookPrice;
    private String bookDescription;
    private String picture;
    private int readCount;
    @JsonProperty("isFavorite")
    private boolean isFavorite;
    private ZonedDateTime createAt = ZonedDateTime.now();

    // Create relationship
    @ManyToOne
    @JoinColumn(name = "categoryId", insertable = false, updatable = false)
    @JsonIgnore
    private CategoryBook category;

    @OneToMany(mappedBy = "book")
    @JsonIgnore
    private List<CommentBook> commentBooks;
}
