package com.example.project_sem_4.object;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;

@Entity
@Getter
@Setter
public class Role {
    @Id
    private int roleId;
    private String roleName;
    private ZonedDateTime createdAt;
}
