package com.example.cleancooks.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "user_likes")
public class UserLikes {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_who_liked")
    private User userWhoLiked;
    @ManyToOne
    @JoinColumn(name = "user_liked")
    private User userLiked;
}