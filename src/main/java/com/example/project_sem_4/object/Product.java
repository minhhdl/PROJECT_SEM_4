package com.example.project_sem_4.object;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;

@Entity
@Getter
@Setter
public class Product {
    @Id
    private int productID;
    private String productName;
    private String productPrice;
    private ZonedDateTime createAt;
}
