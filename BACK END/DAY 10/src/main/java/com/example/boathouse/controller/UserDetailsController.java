package com.example.boathouse.controller;

import com.example.boathouse.model.Users;
import com.example.boathouse.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserDetailsController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<Users> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<Users> getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }
    @GetMapping("/name/{name}")
    public Optional<Users> getUserByName(@PathVariable String name) {
        return userService.getUserByName(name);
    }

    @DeleteMapping("/delete/{userId}")
    public String deleteUser(@PathVariable long id) {
        return userService.deleteUser(id);
    }
}
