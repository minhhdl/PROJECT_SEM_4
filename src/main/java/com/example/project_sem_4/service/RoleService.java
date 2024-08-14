package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class RoleService implements IRoleService {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public List<Roles> getRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Roles getRoleById(int roleId) {
        Optional<Roles> role = roleRepository.findById(roleId);
        return role.orElse(null);
    }

    @Override
    public boolean insertRole(Roles roles) {
        Random random = new Random();
        roles.setRoleId(Math.abs(random.nextInt()));
        boolean status = false;
        Roles rolesExist = getRoleById(roles.getRoleId());
        if (rolesExist == null) {
            try {
                Roles rolesAdded = roleRepository.save(roles);
                if (rolesAdded.getRoleId() > 0) {
                    status = true;
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }

    @Override
    public boolean updateRole(Roles roles) {
        boolean status = false;
        Roles rolesExist = getRoleById(roles.getRoleId());
        if (rolesExist != null) {
            roles.setCreatedAt(rolesExist.getCreatedAt());
            roles.setUpdatedAt(ZonedDateTime.now());
            try {
                Roles rolesAdded = roleRepository.save(roles);
                if (rolesAdded.getRoleId() > 0) {
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
        Roles rolesExist = getRoleById(roleId);
        if (rolesExist != null) {
            try {
                roleRepository.delete(rolesExist);
                status = true;
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }
}
