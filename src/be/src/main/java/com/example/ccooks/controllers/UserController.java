package com.example.ccooks.controllers;

import com.example.ccooks.entities.User;
import com.example.ccooks.errors.UserAlreadyExistsException;
import com.example.ccooks.errors.UserNotFoundException;
import com.example.ccooks.errors.UsernameIsTakenException;
import com.example.ccooks.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:4200", "https://ignatmatei.github.io/"})
public class UserController {
    private final UserService userService;
    @GetMapping("/boris")
    public ResponseEntity<String> getBoris() {
        return ResponseEntity.ok("Boris1");
    }
    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
    @GetMapping("/random")
    public ResponseEntity<User> reccomendUser() {
        return ResponseEntity.ok(userService.getRandomUser());
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
    @PatchMapping("/{uid}")
    public ResponseEntity<Void> updateUser(@PathVariable Long uid, @RequestBody User user) throws UserNotFoundException {
        userService.updateUserProfile(uid, user.getInsta(), user.getAge(), user.getCity(), user.getDescription());
        return ResponseEntity.ok().build();
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
    @GetMapping("/recommend/{username}")
    public ResponseEntity<User> recommendUser(@PathVariable String username) {
        return ResponseEntity.ok(userService.recommendUser(username));
    }
}
