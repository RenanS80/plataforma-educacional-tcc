package com.plataformaeducacional.tcc.controllers;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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
	
	// Recupera todos os cursos paginados de uma categoria
	@GetMapping(value = "/category")
	public Page<CourseDTO> findAllCoursesByCategoryId(Pageable pageable, Long id){
		return service.findAllCoursesByCategoryId(pageable, id);
	}
			
	// Insere um novo curso
	@PostMapping
	public ResponseEntity<CourseDTO> insert(@Valid @RequestBody CourseDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	// Atualiza um curso
	@PutMapping(value = "/{id}")
	public ResponseEntity<CourseDTO> update(@PathVariable Long id, @Valid @RequestBody CourseDTO dto){
		CourseDTO newDto = service.update(id, dto);
		return ResponseEntity.ok().body(newDto);
	}
	
	// Deleta um curso
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}