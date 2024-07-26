package com.example.project_sem_4.service;

import com.example.project_sem_4.object.Product;
import com.example.project_sem_4.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getProducts() {
        List<Product> productList = productRepository.findAll();
        if (productList.isEmpty()) {
            return new ArrayList<>();
        }
        return productList;
    }
}
