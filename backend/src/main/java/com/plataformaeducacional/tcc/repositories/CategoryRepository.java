package com.plataformaeducacional.tcc.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.plataformaeducacional.tcc.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	@Query(value = "select *, 0 AS clazz_ from tb_category order by id asc limit 8", nativeQuery = true)
    List<Category> findMainCategories();
}
