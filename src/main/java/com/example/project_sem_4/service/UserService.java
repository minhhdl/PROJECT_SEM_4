package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class UserService implements IUserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    CateUserService cateUserService;

    @Override
    public List<Users> getUsers() {
        return userRepository.getUsersActive();
    }

    @Override
    public Users getUserById(int userId) {
        Optional<Users> user = userRepository.findById(userId);
        return user.orElse(null);
    }

    @Override
    public boolean register(Users user) {
        Random random = new Random();
        user.setUserId(Math.abs(random.nextInt()));
        boolean status = false;
        CategoryUser categoryUserExist = cateUserService.getCateUserById(user.getCategoryId());
        if (categoryUserExist != null) {
            Users userExist = getUserById(user.getUserId());
            if (userExist == null) {
                try {
                    Users userAdded = userRepository.save(user);
                    if (userAdded.getUserId() > 0) {
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
    public boolean updateUser(Users user) {
        boolean status = false;
        CategoryUser categoryUserExist = cateUserService.getCateUserById(user.getCategoryId());
        if (categoryUserExist != null) {
            Users userExist = getUserById(user.getUserId());
            if (userExist != null) {
                user.setCreatedAt(userExist.getCreatedAt());
                user.setUpdatedAt(ZonedDateTime.now());
                try {
                    Users userAdded = userRepository.save(user);
                    if (userAdded.getUserId() > 0) {
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
    public boolean deleteBook(int userId) {
        boolean status = false;
        Users userExist = getUserById(userId);
        if (userExist != null) {
            try {
                userRepository.delete(userExist);
                status = true;
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }

    @Override
    public Users login(String username) {
        Users user = userRepository.login(username);
        return user;
    }
}
