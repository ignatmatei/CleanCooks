package com.example.cleancooks.repositories;

import com.example.cleancooks.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
    Optional<Object> findByUsername(String username);
}
