package com.example.project_sem_4.object;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class Users {
    @Id
    private int userId;
    private int categoryId;
    private String username;
    private int age;
    private String password;
    private String avatar;
    private ZonedDateTime createdAt;

    // Create relationship
    @ManyToOne
    @JoinColumn(name = "categoryId", insertable = false, updatable = false)
    private CategoryUser categoryUser;

    @OneToMany(mappedBy = "user")
    private List<CommentBook> commentBooks;

    @OneToOne
    @JoinColumn(name = "roleId")
    private Role role;
}
