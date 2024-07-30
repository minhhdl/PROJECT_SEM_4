package com.example.project_sem_4.restController;

import com.example.project_sem_4.object.Book;
import com.example.project_sem_4.object.Users;
import com.example.project_sem_4.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookController {
    @Autowired
    private BookService productService;

    @GetMapping("/books")
    public ResponseEntity<?> getBooks() {
        List<Book> bookList = productService.getBooks();
        if (bookList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body("No data yet");
        }
        return ResponseEntity.ok(bookList);
    }
}
