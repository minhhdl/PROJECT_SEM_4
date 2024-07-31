package com.example.project_sem_4.service;

import com.example.project_sem_4.object.CategoryBook;

import java.util.List;

public interface ICateBookService {
    List<CategoryBook> getCategories();

    CategoryBook getCateBookById(int cateId);

    boolean insertCategory(CategoryBook categoryBook);

    boolean updateCategory(CategoryBook categoryBook);

    boolean deleteCategory(int cateId);
}
