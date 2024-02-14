package com.example.boathouse.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boathouse.dto.request.AuthenticationRequest;
import com.example.boathouse.dto.request.RegisterRequest;
import com.example.boathouse.dto.request.UserRequest;
import com.example.boathouse.dto.response.AuthenticationResponse;
import com.example.boathouse.model.Users;
import com.example.boathouse.service.AuthenticationService;
import com.example.boathouse.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final UserService userService; // Inject UserService

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

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
     @PutMapping("/{id}")
    public ResponseEntity<String> updateUserDetails(@PathVariable long id, @RequestBody UserRequest request) {
        authenticationService.updateUserDetails(id, request);
        return ResponseEntity.ok("User details updated successfully");
    }
}

