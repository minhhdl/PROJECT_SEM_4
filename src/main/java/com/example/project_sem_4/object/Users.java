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
public class Users {
    @Id
    private int userId;
    @Min(value = 1, message = "Category id cannot be empty and cannot be zero")
    private int categoryId;
    @NotNull(message = "Username cannot be null")
    @NotBlank(message = "Username cannot be blank")
    @Column(columnDefinition = "nvarchar(50)")
    @Size(max = 50, message = "Username must not exceed 50 characters")
    private String username;
    @NotNull(message = "Age cannot be null")
    @Min(value = 1, message = "Age cannot be less than 0 and greater than 100")
    @Max(value = 100, message = "Age cannot be less than 0 and greater than 100")
    private int age;
    @NotNull(message = "Password cannot be null")
    @NotBlank(message = "Password cannot be blank")
    @Column(columnDefinition = "nvarchar(255)")
    @Size(max = 255, message = "Book category name must not exceed 255 characters")
    private String password;
    @Column(columnDefinition = "nvarchar(max)")
    private String avatar;
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private ZonedDateTime createdAt = ZonedDateTime.now();
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private ZonedDateTime updatedAt;

    // Create relationship
    @ManyToOne
    @JoinColumn(name = "categoryId", insertable = false, updatable = false)
    @JsonIgnore
    private CategoryUser categoryUser;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<CommentBook> commentBooks;

    @OneToOne
    @JoinColumn(name = "roleId")
    @JsonIgnore
    private Roles roles;
}
