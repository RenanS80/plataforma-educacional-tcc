package com.plataformaeducacional.tcc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plataformaeducacional.tcc.dto.TagDTO;
import com.plataformaeducacional.tcc.services.TagService;

@RestController
@RequestMapping(value = "/tags")
public class TagController {
	
	@Autowired
	private TagService service;
	
	// Lista todos as tags paginadas
	@GetMapping
	public Page<TagDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	// Recupera tag por id
	@GetMapping(value = "/{id}")
	public ResponseEntity<TagDTO> findById(@PathVariable Long id){
		TagDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
}

