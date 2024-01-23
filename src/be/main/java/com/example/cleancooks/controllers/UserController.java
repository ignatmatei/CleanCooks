package com.example.cleancooks.controllers;

import com.example.cleancooks.entities.User;
import com.example.cleancooks.errors.UserAlreadyExistsException;
import com.example.cleancooks.errors.UserNotFoundException;
import com.example.cleancooks.errors.UsernameIsTakenException;
import com.example.cleancooks.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/api")
public class UserController {
    private final UserService userService;
    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
    @PostMapping("/add")
    public ResponseEntity<Void> addUser(@RequestBody User user) throws UserAlreadyExistsException,
            UsernameIsTakenException {
        userService.addUser(user);
        return ResponseEntity.ok().build();
    }
    @PutMapping("/like/{uid}/{likedUid}")
    public ResponseEntity<Void> likeUser(@PathVariable Long uid, @PathVariable Long likedUid) throws UserNotFoundException {
        userService.likeUser(uid, likedUid);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/{uid}")
    public ResponseEntity<User> getUser(@PathVariable Long uid) throws UserNotFoundException {
        return ResponseEntity.ok(userService.getUser(uid));
    }
    @GetMapping("/username/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) throws UserNotFoundException {
        return ResponseEntity.ok(userService.getUserByUsername(username));
    }
    @DeleteMapping("/{uid}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long uid) throws UserNotFoundException {
        userService.deleteUser(uid);
        return ResponseEntity.ok().build();
    }
    @DeleteMapping("/deleteAll")
    public ResponseEntity<Void> deleteAllUsers() {
        userService.deleteAllUsers();
        return ResponseEntity.ok().build();
    }
}
