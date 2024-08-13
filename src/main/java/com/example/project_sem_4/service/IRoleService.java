package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;

import java.util.List;

public interface IRoleService {
    List<Roles> getRoles();

    Roles getRoleById(int roleId);

    boolean insertRole(Roles roles);

    boolean updateRole(Roles roles);

    boolean deleteRole(int roleId);
}
