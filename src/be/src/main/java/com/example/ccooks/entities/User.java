package com.example.ccooks.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.util.List;


@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long uid;
    @Getter
    @Column(unique = true, nullable = false)
    private String username;
    @Column(nullable = false, unique = true)
    private String email;
    @Column
    private String password;
    @Column
    private String insta;
    @Column
    private String age;
    @Column
    private String city;
    @Column
    private String description;
    @ElementCollection
    private List<Long> likes;
    @ElementCollection
    private List<Long> matches;
    public User() {
    }
    public User(String username, String email, String insta) {
        this.username = username;
        this.email = email;
        this.insta = insta;
    }
    public User(User user) {
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.insta = user.getInsta();
    }

}
