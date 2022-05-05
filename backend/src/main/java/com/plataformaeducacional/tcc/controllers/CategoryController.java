package com.plataformaeducacional.tcc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plataformaeducacional.tcc.dto.CategoryDTO;
import com.plataformaeducacional.tcc.dto.CourseDTO;
import com.plataformaeducacional.tcc.services.CategoryService;

@RestController
@RequestMapping(value = "/categories")
public class CategoryController {
	
	@Autowired
	private CategoryService service;
	
	// Lista todos as categorias paginadas
	@GetMapping
	public Page<CategoryDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	// Recupera categoria por id
	@GetMapping(value = "/{id}")
	public ResponseEntity<CategoryDTO> findById(@PathVariable Long id){
		CategoryDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
	
	// Lista as top categorias
	@GetMapping(value = "/main")
	public ResponseEntity<List<CategoryDTO>> findMainCategories(){
		List<CategoryDTO> list = service.findMainCategories();
		return ResponseEntity.ok(list);
	}
}

