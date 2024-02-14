package com.example.boathouse.service;

import com.example.boathouse.model.Users;
import com.example.boathouse.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public List<Users> getAllUsers() {
        return userRepo.findAll();
    }

    public Optional<Users> getUserById(long id) {
        return userRepo.findById(id);
    }

    public String deleteUser(long id) {
        if (userRepo.existsById(id)) {
            userRepo.deleteById(id);
            return "User deleted successfully";
        } else {
            return "User not found";
        }
    }

    public Optional<Users> getUserByName(String name) {
        return userRepo.findByName(name);
    }

  
}
