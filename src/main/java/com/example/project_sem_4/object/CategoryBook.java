package com.example.project_sem_4.object;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.time.ZonedDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class CategoryBook {
    @Id
    private int categoryId;
    @NotNull(message = "Category name cannot be null")
    @NotBlank(message = "Category name cannot be blank")
    @Column(columnDefinition = "nvarchar(50)")
    @Size(max = 50, message = "Book category name must not exceed 50 characters")
    private String categoryName;
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private ZonedDateTime createdAt = ZonedDateTime.now();
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private ZonedDateTime updatedAt;

    // Create relationship
    @OneToMany(mappedBy = "category")
    @JsonIgnore
    private List<Book> books;

    public CategoryBook(String categoryName) {
        this.categoryName = categoryName;
    }
}
