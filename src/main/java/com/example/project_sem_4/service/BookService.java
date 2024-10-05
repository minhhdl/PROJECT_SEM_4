package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class BookService implements IBookService {
    @Autowired
    BookRepository bookRepository;

    @Autowired
    CateBookService cateBookService;

    @Override
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    @Override
    public List<Book> getBookUpdated() {
        return bookRepository.getBookUpdated();
    }

    @Override
    public Book getBookById(int bookId) {
        Optional<Book> book = bookRepository.findById(bookId);
        return book.orElse(null);
    }

    @Override
    public boolean insertBook(Book book) {
        Random random = new Random();
        book.setBookId(Math.abs(random.nextInt()));
        boolean status = false;
        Book bookExist = getBookById(book.getBookId());
        CategoryBook cateBookExist = cateBookService.getCateBookById(book.getCategoryId());
        if (cateBookExist != null) {
            if (bookExist == null) {
                try {
                    Book bookAdded = bookRepository.save(book);
                    if (bookAdded.getBookId() > 0) {
                        status = true;
                    }
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
        }
        return status;
    }

    @Override
    public boolean updateBook(Book book) {
        boolean status = false;
        Book bookExist = getBookById(book.getBookId());
        CategoryBook cateBookExist = cateBookService.getCateBookById(book.getCategoryId());
        if (cateBookExist != null) {
            if (bookExist != null) {
                book.setCreatedAt(bookExist.getCreatedAt());
                book.setUpdatedAt(ZonedDateTime.now());
                try {
                    Book bookAdded = bookRepository.save(book);
                    if (bookAdded.getBookId() > 0) {
                        status = true;
                    }
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
        }
        return status;
    }

    @Override
    public boolean deleteBook(int bookId) {
        boolean status = false;
        Book bookExist = getBookById(bookId);
        if (bookExist != null) {
            try {
                bookRepository.delete(bookExist);
                status = true;
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }
}
