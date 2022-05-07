package com.plataformaeducacional.tcc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plataformaeducacional.tcc.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
