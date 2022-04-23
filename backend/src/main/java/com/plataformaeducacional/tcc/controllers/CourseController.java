package com.plataformaeducacional.tcc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plataformaeducacional.tcc.dto.CourseDTO;
import com.plataformaeducacional.tcc.services.CourseService;

@RestController
@RequestMapping(value = "/courses")
public class CourseController {
	
	@Autowired
	private CourseService service;
	
	// Recupera todos os cursos
	@GetMapping
	public Page<CourseDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	// Recupera um curso por id 
	@GetMapping(value = "/{id}")
	public CourseDTO findById(@PathVariable Long id){
		return service.findById(id);
	}
}