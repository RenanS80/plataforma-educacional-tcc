package com.plataformaeducacional.tcc.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.plataformaeducacional.tcc.entities.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
	@Query(value = "select *, 0 AS clazz_ from tb_course co join tb_collection c on co.id = c.id where c.category_id = ?", nativeQuery = true)
    Page<Course> findAllCoursesByCategoryId(Pageable pageable, Long id);
}
