package com.example.cleancooks.services;

import com.example.cleancooks.entities.Match;
import com.example.cleancooks.entities.User;
import com.example.cleancooks.entities.UserLikes;
import com.example.cleancooks.errors.UserAlreadyExistsException;
import com.example.cleancooks.errors.UserNotFoundException;
import com.example.cleancooks.errors.UsernameIsTakenException;
import com.example.cleancooks.repositories.MatchRepository;
import com.example.cleancooks.repositories.UserLikesRepository;
import com.example.cleancooks.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final UserLikesRepository userLikesRepository;
    private final MatchRepository matchRepository;
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
    public void likeUser(User userWhoLiked, User userLiked) {
        UserLikes userLikes = new UserLikes();
        userLikes.setUserWhoLiked(userWhoLiked);
        userLikes.setUserLiked(userLiked);
        userLikesRepository.save(userLikes);

        // check if the other user also liked this user
        if (userLikesRepository.findByUserWhoLikedAndUserLiked(userLiked, userWhoLiked) != null) {
            // if so, create a match
            Match match = new Match();
            match.setUser1(userWhoLiked);
            match.setUser2(userLiked);
            matchRepository.save(match);
        }
    }
    public void deleteAllUsers() {
        userRepository.deleteAll();
    }
}
