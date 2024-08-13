package com.example.project_sem_4.service;

import com.example.project_sem_4.object.Book;
import com.example.project_sem_4.object.CategoryUser;
import com.example.project_sem_4.repository.CateUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class CateUserService implements ICateUserService {

    @Autowired
    CateUserRepository cateUserRepository;

    @Override
    public List<CategoryUser> getCateUsers() {
        return cateUserRepository.findAll();
    }

    @Override
    public CategoryUser getCateUserById(int cateUserId) {
        Optional<CategoryUser> categoryUser = cateUserRepository.findById(cateUserId);
        return categoryUser.orElse(null);
    }

    @Override
    public boolean insertCateUser(CategoryUser categoryUser) {
        Random random = new Random();
        categoryUser.setCategoryId(Math.abs(random.nextInt()));
        boolean status = false;
        CategoryUser categoryUserExist = getCateUserById(categoryUser.getCategoryId());
        if (categoryUserExist == null) {
            try {
                CategoryUser categoryUserAdded = cateUserRepository.save(categoryUser);
                if (categoryUserAdded.getCategoryId() > 0) {
                    status = true;
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }

    @Override
    public boolean updateCateUser(CategoryUser categoryUser) {
        boolean status = false;
        CategoryUser categoryUserExist = getCateUserById(categoryUser.getCategoryId());
        if (categoryUserExist != null) {
            categoryUser.setCreatedAt(categoryUserExist.getCreatedAt());
            categoryUser.setUpdatedAt(ZonedDateTime.now());
            try {
                CategoryUser categoryUserAdded = cateUserRepository.save(categoryUser);
                if (categoryUserAdded.getCategoryId() > 0) {
                    status = true;
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }

    @Override
    public boolean deleteCateUser(int cateUserId) {
        boolean status = false;
        CategoryUser categoryUserExist = getCateUserById(cateUserId);
        if (categoryUserExist != null) {
            try {
                cateUserRepository.delete(categoryUserExist);
                status = true;
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }
}
