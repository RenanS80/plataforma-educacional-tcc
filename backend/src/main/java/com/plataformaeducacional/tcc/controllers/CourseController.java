package com.plataformaeducacional.tcc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
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
	
	// Lista todos os cursos paginados
	@GetMapping
	public Page<CourseDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	// Recupera curso por id com a lista dos respectivos recursos e tags
	@GetMapping(value = "/{id}")
	public ResponseEntity<CourseDTO> findById(@PathVariable Long id){
		CourseDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
}