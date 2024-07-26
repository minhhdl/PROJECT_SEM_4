package com.example.project_sem_4.restController;

import com.example.project_sem_4.object.Product;
import com.example.project_sem_4.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<?> getProducts() {
        List<Product> productList = productService.getProducts();
        if (productList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body("No data yet");
        }
        System.out.println("adadsds");
        return ResponseEntity.ok(productList);
    }
}
