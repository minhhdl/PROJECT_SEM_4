package com.example.project_sem_4.restController;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.service.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/book")
public class BookController {

    // VARIABLE
    @Autowired
    BookService bookService;

    @Autowired
    CateBookService cateBookService;
    // AND VARIABLE

    // GET: API
    @GetMapping("/books")
    public ResponseEntity<?> getBooks() {
        List<Book> bookList = bookService.getBooks();
        if (bookList.isEmpty()) {
            return ResponseEntity.ok(Collections.singletonMap("msg", "There are no books yet"));
        }
        return ResponseEntity.ok(bookList);
    }
    // END GET: API

    // POST: API
    @PostMapping("/insertbook")
    public ResponseEntity<?> insertBook(@Valid @RequestBody Book book, BindingResult result) {
        // Validate
        if (result.hasErrors()) {
            List<String> errorMessages = new ArrayList<>();
            for (var item : result.getFieldErrors()) {
                errorMessages.add("Error: " + item.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMessages);
        }
        // End Validate

        // Check duplicate book
        boolean isDuplicate = false;
        CategoryBook cateBookExist = cateBookService.getCateBookById(book.getCategoryId());
        if (cateBookExist != null) {
            List<Book> bookList = bookService.getBooks();
            for (Book item : bookList) {
                if (item.getBookName().equals(book.getBookName())) {
                    isDuplicate = true;
                    break;
                }
            }
            if (isDuplicate) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("This book name already exists. Please try another username!");
            }
            boolean isSuccessfully = bookService.insertBook(book);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Created failed. Please check your data and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Created successfully");
        }
        return ResponseEntity.status(HttpStatus.OK).body("This category id does not exist");
    }
    // END POST: API

    // PUT: API
    @PutMapping("/updatebook/{bookid}")
    public ResponseEntity<?> updateBook(@PathVariable("bookid") int bookId, @Valid @RequestBody Book book, BindingResult result) {
        // Validate
        if (result.hasErrors()) {
            List<String> errorMessages = new ArrayList<>();
            for (var item : result.getFieldErrors()) {
                errorMessages.add("Error: " + item.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMessages);
        }
        // End Validate

        // Check duplicate book
        boolean isDuplicate = false;
        Book bookExist = bookService.getBookById(bookId);
        if (bookExist != null) {
            if (!book.getBookName().equals(bookExist.getBookName())) {
                List<Book> bookList = bookService.getBooks();
                for (Book item : bookList) {
                    if (item.getBookName().equals(book.getBookName())) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (isDuplicate) {
                    return ResponseEntity.status(HttpStatus.CONFLICT).body("This book name already exists. Please try another username!");
                }
            }
            CategoryBook cateBookExist = cateBookService.getCateBookById(book.getCategoryId());
            if (cateBookExist != null) {
                book.setBookId(bookId);

                boolean isSuccessfully = bookService.updateBook(book);
                if (!isSuccessfully) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Updated failed. Please check your data and try again!");
                }
                return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
            }
            return ResponseEntity.status(HttpStatus.OK).body("This category id does not exist");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This book could not be found by id: " + bookId);
    }
    // END PUT: API

    // DELETE: API
    @DeleteMapping("/deletebook/{bookid}")
    public ResponseEntity<?> deleteBook(@PathVariable("bookid") int bookId) {
        Book bookExist = bookService.getBookById(bookId);
        if (bookExist != null) {
            boolean isSuccessfully = bookService.deleteBook(bookId);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Deleted failed. Please check your url and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This book could not be found by id: " + bookId);
    }
    // END DELETE: API
}
