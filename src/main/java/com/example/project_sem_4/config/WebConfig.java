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

    @Autowired
    UserService userService;

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
            Users user = new Users();
            boolean isDuplicateRole = false;
            boolean isDuplicateCateUser = false;
            boolean isDuplicateUser = false;
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
                for (CategoryUser cateUser : categoryUsers) {
                    if (item.getCategoryName().equals(cateUser.getCategoryName())) {
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

            // Check duplicate user

            // Insert user default
            user.setUserId(Math.abs(random.nextInt()));
            user.setAge(17);
            user.setPassword("$2a$10$/NOdBkQmQWe4y0bq4iPZNuxwarJKDUSL2gRlcdt1A20F8BdW3WEbG");
            user.setUsername("Admin");
            for (Roles item : roleService.getRoles()) {
                if (item.getRoleName().equals("Admin")) {
                    user.setRoleId(item.getRoleId());
                    break;
                }
            }
            for (CategoryUser item : cateUserService.getCateUsers()) {
                if (item.getCategoryName().equals("Normal")) {
                    user.setCategoryId(item.getCategoryId());
                    break;
                }
            }
            for (Users item : userService.getUsers()) {
                if (item.getUsername().equals(user.getUsername())) {
                    isDuplicateUser = true;
                    break;
                }
            }
            if (!isDuplicateUser) {
                userService.register(user);
            }
        };
    }
}
