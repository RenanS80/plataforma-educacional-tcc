package com.plataformaeducacional.tcc.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.plataformaeducacional.tcc.entities.Category;
import com.plataformaeducacional.tcc.entities.Course;
import com.plataformaeducacional.tcc.entities.Event;

public interface EventRepository extends JpaRepository<Event, Long> {
	
	@Query("SELECT obj FROM Event obj WHERE "
			+ "(:category IS NULL OR :category = obj.category) AND "
			+ "(LOWER(obj.title) LIKE LOWER(CONCAT('%',:title,'%')))")
	Page<Event> find(Category category, String title, Pageable pageable);
}
