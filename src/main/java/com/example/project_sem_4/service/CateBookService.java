package com.example.project_sem_4.service;

import com.example.project_sem_4.object.Book;
import com.example.project_sem_4.object.CategoryBook;
import com.example.project_sem_4.repository.CateBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.*;

@Service
public class CateBookService implements ICateBookService {

    @Autowired
    CateBookRepository cateBookRepository;


    @Override
    public List<CategoryBook> getCategories() {
        return cateBookRepository.findAll();
    }

    @Override
    public List<CategoryBook> getCateBookUpdated() {
        return cateBookRepository.getCateBookUpdated();
    }

    @Override
    public CategoryBook getCateBookById(int cateId) {
        Optional<CategoryBook> categoryBook = cateBookRepository.findById(cateId);
        return categoryBook.orElse(null);
    }

    @Override
    public String getCateBookNameById(int cateId) {
        return cateBookRepository.getCateBookNameById(cateId);
    }

    @Override
    public boolean insertCategory(CategoryBook categoryBook) {
        Random random = new Random();
        categoryBook.setCategoryId(Math.abs(random.nextInt()));
        boolean status = false;
        CategoryBook cateExist = getCateBookById(categoryBook.getCategoryId());
        if (cateExist == null) {
            try {
                CategoryBook cate = cateBookRepository.save(categoryBook);
                if (cate.getCategoryId() > 0) {
                    status = true;
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }

    @Override
    public boolean updateCategory(CategoryBook categoryBook) {
        boolean status = false;
        CategoryBook cateExist = getCateBookById(categoryBook.getCategoryId());
        if (cateExist != null) {
            categoryBook.setCreatedAt(cateExist.getCreatedAt());
            categoryBook.setUpdatedAt(ZonedDateTime.now());
            try {
                CategoryBook cate = cateBookRepository.save(categoryBook);
                if (cate.getCategoryId() > 0) {
                    status = true;
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }

    @Override
    public boolean deleteCategory(int cateId) {
        boolean status = false;
        CategoryBook cateExist = getCateBookById(cateId);
        if (cateExist != null) {
            try {
                cateBookRepository.delete(cateExist);
                status = true;
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }
}
