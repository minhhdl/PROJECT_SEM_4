package com.example.project_sem_4.restController;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.service.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/catebook")
public class CategoryBookController {

    // VARIABLE
    @Autowired
    CateBookService cateBookService;
    // END VARIABLE

    // GET: API
    @GetMapping("/catebooks")
    public ResponseEntity<?> getCateBookById() {
        List<CategoryBook> categoryBookList = cateBookService.getCategories();
        if (categoryBookList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body("There are no book categories yet");
        }
        return ResponseEntity.ok(categoryBookList);
    }
    // END GET: API

    // GET BY ID: API
    @GetMapping("/catebook/{cateid}")
    public ResponseEntity<?> getCateBookById(@PathVariable("cateid") int cateId) {
        CategoryBook categoryBook = cateBookService.getCateBookById(cateId);
        if (categoryBook == null) {
            return ResponseEntity.status(HttpStatus.OK).body("This category book could not be found by id: " + cateId);
        }
        return ResponseEntity.ok(categoryBook);
    }
    // END GET: API

    // POST: API
    @PostMapping("/insertcatebook")
    public ResponseEntity<?> insertCateBook(@Valid @RequestBody CategoryBook categoryBook, BindingResult result) {
        // Validate
        if (result.hasErrors()) {
            List<String> errorMessages = new ArrayList<>();
            for (var item : result.getFieldErrors()) {
                errorMessages.add("Error: " + item.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMessages);
        }
        // End Validate

        // Check duplicate category book
        boolean isDuplicate = false;
        List<CategoryBook> usersList = cateBookService.getCategories();
        for (CategoryBook item : usersList) {
            if (item.getCategoryName().equals(categoryBook.getCategoryName())) {
                isDuplicate = true;
                break;
            }
        }
        if (isDuplicate) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("This category name already exists. Please try another username!");
        }
        boolean isSuccessfully = cateBookService.insertCategory(categoryBook);
        if (!isSuccessfully) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Created failed. Please check your data and try again!");
        }
        return ResponseEntity.status(HttpStatus.OK).body("Created successfully");
    }
    // END POST: API

    // PUT: API
    @PutMapping("/updatecatebook/{cateid}")
    public ResponseEntity<?> updateCateBook(@PathVariable("cateid") int cateId, @Valid @RequestBody CategoryBook categoryBook, BindingResult result) {
        // Validate
        if (result.hasErrors()) {
            List<String> errorMessages = new ArrayList<>();
            for (var item : result.getFieldErrors()) {
                errorMessages.add("Error: " + item.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMessages);
        }
        // End Validate

        // Check duplicate category book
        boolean isDuplicate = false;
        categoryBook.setCategoryId(cateId);
        CategoryBook cateBookExist = cateBookService.getCateBookById(cateId);
        if (cateBookExist != null) {
            List<CategoryBook> cateBookList = cateBookService.getCategories();
            for (CategoryBook item : cateBookList) {
                if (item.getCategoryName().equals(categoryBook.getCategoryName())) {
                    isDuplicate = true;
                    break;
                }
            }
            if (isDuplicate) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("This category name already exists. Please try another username!");
            }
            boolean isSuccessfully = cateBookService.updateCategory(categoryBook);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Updated failed. Please check your data and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This category book could not be found by id: " + cateId);
    }
    // END PUT: API

    // DELETE: API
    @DeleteMapping("/deletecatebook/{cateid}")
    public ResponseEntity<?> deleteCateBook(@PathVariable("cateid") int cateId) {
        CategoryBook cateBookExist = cateBookService.getCateBookById(cateId);
        if (cateBookExist != null) {
            boolean isSuccessfully = cateBookService.deleteCategory(cateId);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Deleted failed. Please check your url and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This category book could not be found by id: " + cateId);
    }
    // END DELETE: API
}
