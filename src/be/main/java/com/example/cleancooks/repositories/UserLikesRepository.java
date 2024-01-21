package com.example.cleancooks.repositories;
import com.example.cleancooks.entities.User;
import com.example.cleancooks.entities.UserLikes;
import org.springframework.data.repository.CrudRepository;

public interface UserLikesRepository extends CrudRepository<UserLikes, Long> {
    UserLikes findByUserWhoLikedAndUserLiked(User userWhoLiked, User userLiked);
}