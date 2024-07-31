package com.example.project_sem_4.restController;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.service.BookService;
import com.example.project_sem_4.service.CateBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookController {

    @Autowired
    BookService bookService;

    @Autowired
    CateBookService cateBookService;

    @GetMapping("/books")
    public ResponseEntity<?> getBooks() {
        List<Book> bookList = bookService.getBooks();
        if (bookList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body("There are no books yet");
        }
        return ResponseEntity.ok(bookList);
    }

    @PostMapping("/insertBook")
    public ResponseEntity<?> insertBook(@RequestBody Book book) {
        CategoryBook cateBookExist = cateBookService.getCateBookById(book.getCategoryId());
        if (cateBookExist != null) {
            boolean isSuccessfully = bookService.insertBook(book);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Created failed. Please try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Created successfully");
        }
        return ResponseEntity.status(HttpStatus.OK).body("This category id does not exist");
    }

    @PutMapping("/updateBook/{bookId}")
    public ResponseEntity<?> updateCateBooks(@PathVariable("bookId") int bookId, @RequestBody Book book) {
        CategoryBook cateBookExist = cateBookService.getCateBookById(book.getCategoryId());
        if (cateBookExist != null) {
            book.setBookId(bookId);
            Book bookExist = bookService.getBookById(bookId);
            if (bookExist != null) {
                boolean isSuccessfully = bookService.updateBook(book);
                if (!isSuccessfully) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Updated failed. Please try again!");
                }
                return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This book could not be found by id: " + bookId);
        }
        return ResponseEntity.status(HttpStatus.OK).body("This category id does not exist");
    }

    @DeleteMapping("/deleteBook/{bookId}")
    public ResponseEntity<?> deleteCateBooks(@PathVariable("bookId") int bookId) {
        Book bookExist = bookService.getBookById(bookId);
        if (bookExist != null) {
            boolean isSuccessfully = bookService.deleteBook(bookId);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Deleted failed. Please try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This book could not be found by id: " + bookId);
    }
}
