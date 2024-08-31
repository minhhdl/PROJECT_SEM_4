package com.example.project_sem_4.config;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.servlet.config.annotation.*;

import java.util.*;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    RoleService roleService;

    @Autowired
    CateUserService cateUserService;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173/")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
    }

    @Bean
    public CommandLineRunner defaultInsert() {
        return args -> {
            //Variable
            Random random = new Random();
            ArrayList<Roles> roles = new ArrayList<>();
            Roles roleAdmin = new Roles();
            Roles roleUser = new Roles();
            boolean isDuplicateRole = false;
            boolean isDuplicateCateUser = false;
            ArrayList<CategoryUser> categoryUsers = new ArrayList<>();
            CategoryUser cateUserNormal = new CategoryUser();
            CategoryUser cateUserDisability = new CategoryUser();

            // Check duplicate role

            // Insert role default
            roleAdmin.setRoleId(Math.abs(random.nextInt()));
            roleAdmin.setRoleName("Admin");

            roleUser.setRoleId(Math.abs(random.nextInt()));
            roleUser.setRoleName("User");

            roles.add(roleAdmin);
            roles.add(roleUser);
            List<Roles> roleList = roleService.getRoles();
            for (Roles item : roleList) {
                for (Roles role : roles) {
                    if (item.getRoleName().equals(role.getRoleName())) {
                        isDuplicateRole = true;
                        break;
                    }
                }
                if (item.getRoleName().equals(roleAdmin.getRoleName())) {
                    isDuplicateRole = true;
                    break;
                }
            }
            if (!isDuplicateRole) {
                for (var role : roles) {
                    roleService.insertRole(role);
                }
            }

            // Check duplicate category user

            // Insert category user default
            cateUserNormal.setCategoryId(Math.abs(random.nextInt()));
            cateUserNormal.setCategoryName("Normal");

            cateUserDisability.setCategoryId(Math.abs(random.nextInt()));
            cateUserDisability.setCategoryName("Visually impaired");

            categoryUsers.add(cateUserNormal);
            categoryUsers.add(cateUserDisability);
            List<CategoryUser> cateUserList = cateUserService.getCateUsers();
            for (CategoryUser item : cateUserList) {
                for (CategoryUser user : categoryUsers) {
                    if (item.getCategoryName().equals(user.getCategoryName())) {
                        isDuplicateCateUser = true;
                        break;
                    }
                }
            }
            if (!isDuplicateCateUser) {
                for (var cateUser : categoryUsers) {
                    cateUserService.insertCateUser(cateUser);
                }
            }
        };
    }
}
