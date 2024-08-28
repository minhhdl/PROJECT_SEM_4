package com.example.project_sem_4.object;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.*;

import java.time.ZonedDateTime;

@Entity
@Data
@NoArgsConstructor
public class Roles {
    @Id
    private int roleId;
    @NotNull(message = "Role name cannot be null")
    @NotBlank(message = "Role name cannot be blank")
    @Column(columnDefinition = "nvarchar(50)")
    @Size(max = 50, message = "Role name must not exceed 50 characters")
    private String roleName;
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private ZonedDateTime createdAt = ZonedDateTime.now();
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private ZonedDateTime updatedAt;

    public Roles(String roleName) {
        this.roleName = roleName;
    }
}
