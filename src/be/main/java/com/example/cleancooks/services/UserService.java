package com.example.cleancooks.services;

import com.example.cleancooks.entities.User;
import com.example.cleancooks.errors.UserAlreadyExistsException;
import com.example.cleancooks.errors.UserNotFoundException;
import com.example.cleancooks.errors.UsernameIsTakenException;

import com.example.cleancooks.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public void addUser(User user) throws UserAlreadyExistsException, UsernameIsTakenException {
        if(userRepository.existsByEmail(user.getEmail())) {
            throw new UserAlreadyExistsException("User already exists");
        }
        if(userRepository.existsByUsername(user.getUsername())) {
            throw new UsernameIsTakenException("Username is taken");
        }
        userRepository.save(user);
    }
    public User getUser(Long uid) throws UserNotFoundException {
        return userRepository.findById(uid).orElseThrow(() ->
                new UserNotFoundException("User not found"));
    }
    public User getUserByUsername(String username) throws UserNotFoundException {
        return (User) userRepository.findByUsername(username).orElseThrow(() ->
                new UserNotFoundException("User not found"));
    }
    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }
    public void deleteUser(Long uid) throws UserNotFoundException {
        if(!userRepository.existsById(uid)) {
            throw new UserNotFoundException("User not found");
        }
        userRepository.deleteById(uid);
    }
    public void likeUser(Long uid, Long likedUid) throws UserNotFoundException {
        User user = userRepository.findById(uid).orElseThrow(() ->
                new UserNotFoundException("User not found"));
        User likedUser = userRepository.findById(likedUid).orElseThrow(() ->
                new UserNotFoundException("User not found"));
        user.getLikes().add(likedUid);
        if (likedUser.getLikes().contains(uid)) {
            user.getMatches().add(likedUid);
            likedUser.getMatches().add(uid);
        }
        userRepository.save(user);
        userRepository.save(likedUser);
    }
    public void deleteAllUsers() {
        userRepository.deleteAll();
    }
}
