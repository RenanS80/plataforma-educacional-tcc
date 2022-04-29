package com.plataformaeducacional.tcc.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.plataformaeducacional.tcc.entities.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
