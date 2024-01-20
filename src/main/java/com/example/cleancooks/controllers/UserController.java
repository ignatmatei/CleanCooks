package com.example.cleancooks.controllers;

import com.example.cleancooks.entities.User;
import com.example.cleancooks.errors.UserAlreadyExistsException;
import com.example.cleancooks.errors.UserNotFoundException;
import com.example.cleancooks.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
    @PostMapping("/add")
    public ResponseEntity<Void> addUser(@RequestBody User user) throws UserAlreadyExistsException {
        userService.addUser(user);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/{uid}")
    public ResponseEntity<User> getUser(@PathVariable Long uid) throws UserNotFoundException {
        return ResponseEntity.ok(userService.getUser(uid));
    }
    @DeleteMapping("/deleteAll")
    public ResponseEntity<Void> deleteAllUsers() {
        userService.deleteAllUsers();
        return ResponseEntity.ok().build();
    }
}
