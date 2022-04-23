package com.plataformaeducacional.tcc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plataformaeducacional.tcc.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
