package com.example.project_sem_4.object;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.time.ZonedDateTime;
import java.util.List;

@Entity
@Data
public class CategoryBook {
    @Id
    private int categoryId;
    private String categoryName;
    private ZonedDateTime createdAt = ZonedDateTime.now();

    // Create relationship
    @OneToMany(mappedBy = "category")
    @JsonIgnore
    private List<Book> books;
}
