package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;

import java.util.List;

public interface ICateUserService {
    List<CategoryUser> getCateUsers();

    CategoryUser getCateUserById(int cateUserId);

    boolean insertCateUser(CategoryUser categoryUser);

    boolean updateCateUser(CategoryUser categoryUser);

    boolean deleteCateUser(int cateUserId);
}
