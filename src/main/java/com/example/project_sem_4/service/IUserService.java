package com.example.project_sem_4.service;

import com.example.project_sem_4.object.Users;

import java.util.List;

public interface IUserService {
    List<Users> getUsers();

    Users getUserById(int userId);

    boolean register(Users user);

    boolean updateUser(Users user);

    boolean deleteBook(int userId);

    Users login(String username);
}
