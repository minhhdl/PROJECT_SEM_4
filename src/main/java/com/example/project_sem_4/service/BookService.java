package com.example.project_sem_4.service;

import com.example.project_sem_4.object.Book;
import com.example.project_sem_4.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService implements IBookService {
    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> getBooks() {
        List<Book> bookList = bookRepository.findAll();
        if (bookList.isEmpty()) {
            return new ArrayList<>();
        }
        return bookList;
    }
}
