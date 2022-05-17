package com.plataformaeducacional.tcc.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.plataformaeducacional.tcc.entities.Category;
import com.plataformaeducacional.tcc.entities.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
		
	@Query("SELECT obj FROM Course obj WHERE "
			+ "(:category IS NULL OR :category = obj.category) AND "
			+ "(LOWER(obj.title) LIKE LOWER(CONCAT('%',:title,'%')))")
	Page<Course> find(Category category, String title, Pageable pageable);
}
