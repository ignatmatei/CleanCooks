package com.example.cleancooks.entities;

import jakarta.persistence.*;
import lombok.Data;

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
}
