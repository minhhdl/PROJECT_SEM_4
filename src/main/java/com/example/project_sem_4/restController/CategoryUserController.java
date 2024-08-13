package com.example.project_sem_4.restController;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.service.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cateuser")
public class CategoryUserController {

    // VARIABLE
    @Autowired
    CateUserService cateUserService;
    // END VARIABLE

    // GET: API
    @GetMapping("/cateusers")
    public ResponseEntity<?> getCateUsers() {
        List<CategoryUser> categoryUserList = cateUserService.getCateUsers();
        if (categoryUserList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body("There are no user categories yet");
        }
        return ResponseEntity.ok(categoryUserList);
    }
    // END GET: API

    // POST: API
    @PostMapping("/insertcateuser")
    public ResponseEntity<?> insertCateUser(@Valid @RequestBody CategoryUser categoryUser, BindingResult result) {
        // Validate
        if (result.hasErrors()) {
            List<String> errorMessages = new ArrayList<>();
            for (var item : result.getFieldErrors()) {
                errorMessages.add("Error: " + item.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMessages);
        }
        // End Validate

        // Check duplicate username
        boolean isDuplicate = false;
        List<CategoryUser> categoryUserList = cateUserService.getCateUsers();
        for (CategoryUser item : categoryUserList) {
            if (item.getCategoryName().equals(categoryUser.getCategoryName())) {
                isDuplicate = true;
                break;
            }
        }
        if (isDuplicate) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("This category name already exists. Please try another username!");
        }
        boolean isSuccessfully = cateUserService.insertCateUser(categoryUser);
        if (!isSuccessfully) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Created failed. Please check your data and try again!");
        }
        return ResponseEntity.status(HttpStatus.OK).body("Created successfully");
    }
    // END POST: API

    // PUT: API
    @PutMapping("/updatecateuser/{cateuserid}")
    public ResponseEntity<?> updateCateUser(@PathVariable("cateuserid") int cateUserId, @Valid @RequestBody CategoryUser categoryUser, BindingResult result) {
        // Validate
        if (result.hasErrors()) {
            List<String> errorMessages = new ArrayList<>();
            for (var item : result.getFieldErrors()) {
                errorMessages.add("Error: " + item.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMessages);
        }
        // End Validate

        // Check duplicate username
        boolean isDuplicate = false;
        categoryUser.setCategoryId(cateUserId);
        CategoryUser cateUserExist = cateUserService.getCateUserById(cateUserId);
        if (cateUserExist != null) {
            List<CategoryUser> categoryUserList = cateUserService.getCateUsers();
            for (CategoryUser item : categoryUserList) {
                if (item.getCategoryName().equals(categoryUser.getCategoryName())) {
                    isDuplicate = true;
                    break;
                }
            }
            if (isDuplicate) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("This category name already exists. Please try another username!");
            }
            boolean isSuccessfully = cateUserService.updateCateUser(categoryUser);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Updated failed. Please check your data and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This category book could not be found by id: " + cateUserId);
    }
    // END PUT: API

    // DELETE: API
    @DeleteMapping("/deletecateuser/{cateuserid}")
    public ResponseEntity<?> deleteCateUser(@PathVariable("cateuserid") int cateUserId) {
        CategoryUser cateUserExist = cateUserService.getCateUserById(cateUserId);
        if (cateUserExist != null) {
            boolean isSuccessfully = cateUserService.deleteCateUser(cateUserId);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Deleted failed. Please check your url and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This category user could not be found by id: " + cateUserId);
    }
    // END DELETE: API
}
