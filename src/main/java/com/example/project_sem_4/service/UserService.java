package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
import java.util.Random;

public class UserService implements IUserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public Users getUserById(int userId) {
        Optional<Users> user = userRepository.findById(userId);
        return user.orElse(null);
    }

    @Override
    public boolean insertUser(Users user) {
        Random random = new Random();
        user.setUserId(Math.abs(random.nextInt()));
        boolean status = false;
        try {
            Users userAdded = userRepository.save(user);
            if (userAdded.getUserId() > 0) {
                status = true;
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return status;
    }

    @Override
    public boolean updateUser(Users user) {
        boolean status = false;
        Users userExist = getUserById(user.getUserId());
        if (userExist != null) {
            try {
                Users userAdded = userRepository.save(user);
                if (userAdded.getUserId() > 0) {
                    status = true;
                }
            } catch (Exception ex) {
                ex.printStackTrace();
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
}
