package com.example.cleancooks.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;


@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long uid;
    @Column
    private String name;
    @Column(nullable = false, unique = true)
    private String email;
    @Column
    private String insta;
    @OneToMany(mappedBy = "userWhoLiked")
    private List<UserLikes> userLikes;
    @OneToMany(mappedBy = "user1")
    private List<Match> matches;
    public User() {
    }
    public User(String name, String email, String insta) {
        this.name = name;
        this.email = email;
        this.insta = insta;
    }
    public User(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.insta = user.getInsta();
    }
}
