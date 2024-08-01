package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;

import java.util.List;

public interface IRoleService {
    List<Role> getRoles();

    Role getRoleById(int roleId);

    boolean insertRole(Role role);

    boolean updateRole(Role role);

    boolean deleteRole(int roleId);
}
