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
@RequestMapping("/commentbook")
public class CommentBookController {

    // VARIABLE
    @Autowired
    CommentBookService commentBookService;

    @Autowired
    BookService bookService;

    @Autowired
    UserService userService;
    // END VARIABLE

    // GET: API
    @GetMapping("/comments")
    public ResponseEntity<?> getCommentBooks() {
        List<CommentBook> commentBookList = commentBookService.getCommentBooks();
        if (commentBookList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body("There are no book comments yet");
        }
        return ResponseEntity.ok(commentBookList);
    }
    // END GET: API

    // POST: API
    @PostMapping("/insertcomment")
    public ResponseEntity<?> insertComment(@Valid @RequestBody CommentBook comment, BindingResult result) {
        // Validate
        if (result.hasErrors()) {
            List<String> errorMessages = new ArrayList<>();
            for (var item : result.getFieldErrors()) {
                errorMessages.add("Error: " + item.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMessages);
        }
        // End Validate
        Book bookExist = bookService.getBookById(comment.getBookId());
        if (bookExist != null) {
            Users userExist = userService.getUserById(comment.getUserId());
            if (userExist != null) {
                boolean isSuccessfully = commentBookService.insertCommentBook(comment);
                if (!isSuccessfully) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Created failed. Please check your data and try again!");
                }
                return ResponseEntity.status(HttpStatus.OK).body("Created successfully");
            }
            return ResponseEntity.status(HttpStatus.OK).body("This user id does not exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body("This book id does not exist");
    }
    // END POST: API

    // PUT: API
    @PutMapping("/updatecomment/{commentid}")
    public ResponseEntity<?> updateComment(@PathVariable("commentid") int commentId, @Valid @RequestBody CommentBook comment, BindingResult result) {
        // Validate
        if (result.hasErrors()) {
            List<String> errorMessages = new ArrayList<>();
            for (var item : result.getFieldErrors()) {
                errorMessages.add("Error: " + item.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMessages);
        }
        // End Validate
        Book bookExist = bookService.getBookById(comment.getBookId());
        if (bookExist != null) {
            comment.setCommentId(commentId);
            CommentBook commentExist = commentBookService.getCommentBookById(commentId);
            if (commentExist != null) {
                boolean isSuccessfully = commentBookService.updateCommentBook(comment);
                if (!isSuccessfully) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Updated failed. Please check your data and try again!");
                }
                return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This comment could not be found by id: " + commentId);
        }
        return ResponseEntity.status(HttpStatus.OK).body("This book id does not exist");
    }
    // END PUT: API

    // DELETE: API
    @DeleteMapping("/deletecomment/{commentid}")
    public ResponseEntity<?> deleteComment(@PathVariable("commentid") int commentId) {
        CommentBook commentExist = commentBookService.getCommentBookById(commentId);
        if (commentExist != null) {
            boolean isSuccessfully = commentBookService.deleteCommentBook(commentId);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Deleted failed. Please check your url and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This comment could not be found by id: " + commentId);
    }
    // END DELETE: API
}
