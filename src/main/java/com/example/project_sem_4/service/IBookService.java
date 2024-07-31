package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;

import java.util.List;

public interface IBookService {
    List<Book> getBooks();

    Book getBookById(int bookId);

    boolean insertBook(Book book);

    boolean updateBook(Book book);

    boolean deleteBook(int bookId);
}
