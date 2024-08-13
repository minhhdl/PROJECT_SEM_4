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
@RequestMapping("/user")
public class UserController {
    // VARIABLE
    @Autowired
    CateUserService cateUserService;

    @Autowired
    UserService userService;
    // END VARIABLE

    // GET: API
    @GetMapping("/users")
    public ResponseEntity<?> getUsers() {
        List<Users> userList = userService.getUsers();
        if (userList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body("There are no users yet");
        }
        return ResponseEntity.ok(userList);
    }
    // END GET: API

    // POST: API
    @PostMapping("/insertuser")
    public ResponseEntity<?> insertUser(@Valid @RequestBody Users user, BindingResult result) {
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
        CategoryUser cateUserExist = cateUserService.getCateUserById(user.getCategoryId());
        if (cateUserExist != null) {
            List<Users> usersList = userService.getUsers();
            for (Users item : usersList) {
                if (item.getUsername().equals(user.getUsername())) {
                    isDuplicate = true;
                    break;
                }
            }
            if (isDuplicate) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("This username already exists. Please try another username!");
            }
            boolean isSuccessfully = userService.insertUser(user);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Created failed. Please check your data and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Created successfully");
        }
        return ResponseEntity.status(HttpStatus.OK).body("This user category id does not exist");
    }
    // END POST: API

    // PUT: API
    @PutMapping("/updateuser/{userid}")
    public ResponseEntity<?> updateUser(@PathVariable("userid") int userId, @Valid @RequestBody Users user, BindingResult result) {
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
        CategoryUser cateUserExist = cateUserService.getCateUserById(user.getCategoryId());
        if (cateUserExist != null) {
            user.setUserId(userId);
            Users userExist = userService.getUserById(userId);
            if (userExist != null) {
                List<Users> usersList = userService.getUsers();
                for (Users item : usersList) {
                    if (item.getUsername().equals(user.getUsername())) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (isDuplicate) {
                    return ResponseEntity.status(HttpStatus.CONFLICT).body("This username already exists. Please try another username!");
                }
                boolean isSuccessfully = userService.updateUser(user);
                if (!isSuccessfully) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Updated failed. Please check your data and try again!");
                }
                return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This user could not be found by id: " + userId);
        }
        return ResponseEntity.status(HttpStatus.OK).body("This user category id does not exist");
    }
    // END PUT: API

    // DELETE: API
    @DeleteMapping("/deleteuser/{userid}")
    public ResponseEntity<?> deleteUser(@PathVariable("userid") int userId) {
        Users userExist = userService.getUserById(userId);
        if (userExist != null) {
            boolean isSuccessfully = userService.deleteBook(userId);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Deleted failed. Please check your url and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This user could not be found by id: " + userId);
    }
    // END DELETE: API
}
