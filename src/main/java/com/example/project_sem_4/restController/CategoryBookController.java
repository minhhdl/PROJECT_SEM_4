package com.example.project_sem_4.restController;

import com.example.project_sem_4.object.CategoryBook;
import com.example.project_sem_4.service.CateBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cateBook")
public class CategoryBookController {

    @Autowired
    CateBookService cateBookService;

    @GetMapping("/cateBooks")
    public ResponseEntity<?> getCateBooks() {
        List<CategoryBook> categoryBookList = cateBookService.getCategories();
        if (categoryBookList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body("There are no book categories yet");
        }
        return ResponseEntity.ok(categoryBookList);
    }

    @PostMapping("/insertCate")
    public ResponseEntity<?> insertCateBooks(@RequestBody CategoryBook categoryBook) {
        boolean isSuccessfully = cateBookService.insertCategory(categoryBook);
        if (!isSuccessfully) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Created failed. Please try again!");
        }
        return ResponseEntity.status(HttpStatus.OK).body("Created successfully");
    }

    @PutMapping("/updateCate/{cateId}")
    public ResponseEntity<?> updateCateBooks(@PathVariable("cateId") int cateId, @RequestBody CategoryBook categoryBook) {
        categoryBook.setCategoryId(cateId);
        CategoryBook cateBookExist = cateBookService.getCateBookById(cateId);
        if (cateBookExist != null) {
            boolean isSuccessfully = cateBookService.updateCategory(categoryBook);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Updated failed. Please try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This category book could not be found by id: " + cateId);
    }

    @DeleteMapping("/deleteCate/{cateId}")
    public ResponseEntity<?> deleteCateBooks(@PathVariable("cateId") int cateId) {
        CategoryBook cateBookExist = cateBookService.getCateBookById(cateId);
        if (cateBookExist != null) {
            boolean isSuccessfully = cateBookService.deleteCategory(cateId);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Deleted failed. Please try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This category book could not be found by id: " + cateId);
    }
}
