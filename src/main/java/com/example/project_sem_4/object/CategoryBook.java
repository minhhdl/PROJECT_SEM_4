package com.example.project_sem_4.object;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class CategoryBook {
    @Id
    private int categoryId;
    private String categoryName;
    private ZonedDateTime createdAt;

    // Create relationship
    @OneToMany(mappedBy = "category")
    private List<Book> books;
}
