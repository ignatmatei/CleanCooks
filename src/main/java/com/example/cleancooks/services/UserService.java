package com.example.cleancooks.services;

import com.example.cleancooks.entities.User;
import com.example.cleancooks.errors.UserAlreadyExistsException;
import com.example.cleancooks.errors.UserNotFoundException;
import com.example.cleancooks.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public void addUser(User user) throws UserAlreadyExistsException {
        if(userRepository.existsByEmail(user.getEmail())) {
            throw new UserAlreadyExistsException("User already exists");
        }
        userRepository.save(user);
    }
    public User getUser(Long uid) throws UserNotFoundException {
        return userRepository.findById(uid).orElseThrow(() ->
                new UserNotFoundException("User not found"));
    }

    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }
    public void deleteAllUsers() {
        userRepository.deleteAll();
    }
}
