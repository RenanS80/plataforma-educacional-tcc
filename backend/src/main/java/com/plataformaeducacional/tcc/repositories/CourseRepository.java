package com.plataformaeducacional.tcc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plataformaeducacional.tcc.entities.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
