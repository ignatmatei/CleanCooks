package com.example.cleancooks.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "matches")
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user1_id")
    private User user1;
    @ManyToOne
    @JoinColumn(name = "user2_id")
    private User user2;
}
