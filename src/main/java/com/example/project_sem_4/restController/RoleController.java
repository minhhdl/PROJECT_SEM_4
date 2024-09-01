package com.example.project_sem_4.restController;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.service.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/role")
public class RoleController {
    // VARIABLE
    @Autowired
    RoleService roleService;
    // END VARIABLE

    // GET: API
    @GetMapping("/roles")
    public ResponseEntity<?> getCommentBooks() {
        List<Roles> roleList = roleService.getRoles();
        if (roleList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body("There are no roles yet");
        }
        return ResponseEntity.ok(roleList);
    }
    // END GET: API

    // GET BY ID: API
    @GetMapping("/role/{roleid}")
    public ResponseEntity<?> getRoleById(@PathVariable("roleid") int roleId) {
        Roles role = roleService.getRoleById(roleId);
        if (role == null) {
            return ResponseEntity.status(HttpStatus.OK).body("This role could not be found by id: " + roleId);
        }
        return ResponseEntity.ok(role);
    }
    // END GET: API

    // POST: API
    @PostMapping("/insertrole")
    public ResponseEntity<?> insertRole(@Valid @RequestBody Roles role, BindingResult result) {
        // Validate
        if (result.hasErrors()) {
            List<String> errorMessages = new ArrayList<>();
            for (var item : result.getFieldErrors()) {
                errorMessages.add("Error: " + item.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMessages);
        }
        // End Validate

        // Check duplicate book
        boolean isDuplicate = false;
        List<Roles> roleList = roleService.getRoles();
        for (Roles item : roleList) {
            if (item.getRoleName().equals(role.getRoleName())) {
                isDuplicate = true;
                break;
            }
        }
        if (isDuplicate) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("This role name already exists. Please try another username!");
        }
        Roles roleExist = roleService.getRoleById(role.getRoleId());
        if (roleExist == null) {
            boolean isSuccessfully = roleService.insertRole(role);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Created failed. Please check your data and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Created successfully");
        }
        return ResponseEntity.status(HttpStatus.OK).body("This role id does not exist");
    }
    // END POST: API

    // PUT: API
    @PutMapping("/updaterole/{roleid}")
    public ResponseEntity<?> updateRole(@PathVariable("roleid") int roleId, @Valid @RequestBody Roles role, BindingResult result) {
        // Validate
        if (result.hasErrors()) {
            List<String> errorMessages = new ArrayList<>();
            for (var item : result.getFieldErrors()) {
                errorMessages.add("Error: " + item.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMessages);
        }
        // End Validate

        // Check duplicate role
        boolean isDuplicate = false;
        role.setRoleId(roleId);
        Roles roleExist = roleService.getRoleById(roleId);
        if (roleExist != null) {
            List<Roles> roleList = roleService.getRoles();
            for (Roles item : roleList) {
                if (item.getRoleName().equals(role.getRoleName())) {
                    isDuplicate = true;
                    break;
                }
            }
            if (isDuplicate) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("This role already exists. Please try another role!");
            }
            boolean isSuccessfully = roleService.updateRole(role);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Updated failed. Please check your data and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This role could not be found by id: " + roleId);
    }
    // END PUT: API

    // DELETE: API
    @DeleteMapping("/deleterole/{roleid}")
    public ResponseEntity<?> deleteRole(@PathVariable("roleid") int roleId) {
        Roles roleExist = roleService.getRoleById(roleId);
        if (roleExist != null) {
            boolean isSuccessfully = roleService.deleteRole(roleId);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Deleted failed. Please check your url and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This role could not be found by id: " + roleId);
    }
    // END DELETE: API
}
