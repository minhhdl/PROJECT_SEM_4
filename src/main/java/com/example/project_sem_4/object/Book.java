package com.example.project_sem_4.object;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class Book {
    @Id
    private int bookId;
    private int categoryId;
    private String bookName;
    private String bookPrice;
    private String bookDescription;
    private String picture;
    private String readCount;
    private boolean isFavorite;
    private ZonedDateTime createAt;

    // Create relationship
    @ManyToOne
    @JoinColumn(name = "categoryId", insertable = false, updatable = false)
    private CategoryBook category;

    @OneToMany(mappedBy = "book")
    private List<CommentBook> commentBooks;
}
