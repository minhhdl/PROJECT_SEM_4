package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
import java.util.Random;

public class RoleService implements IRoleService {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public List<Role> getRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Role getRoleById(int roleId) {
        Optional<Role> role = roleRepository.findById(roleId);
        return role.orElse(null);
    }

    @Override
    public boolean insertRole(Role role) {
        Random random = new Random();
        role.setRoleId(Math.abs(random.nextInt()));
        boolean status = false;
        try {
            Role roleAdded = roleRepository.save(role);
            if (roleAdded.getRoleId() > 0) {
                status = true;
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return status;
    }

    @Override
    public boolean updateRole(Role role) {
        boolean status = false;
        Role roleExist = getRoleById(role.getRoleId());
        if (roleExist != null) {
            try {
                Role roleAdded = roleRepository.save(role);
                if (roleAdded.getRoleId() > 0) {
                    status = true;
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }

    @Override
    public boolean deleteRole(int roleId) {
        boolean status = false;
        Role roleExist = getRoleById(roleId);
        if (roleExist != null) {
            try {
                roleRepository.delete(roleExist);
                status = true;
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }
}
