package com.plataformaeducacional.tcc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plataformaeducacional.tcc.dto.CollectionDTO;
import com.plataformaeducacional.tcc.services.CollectionService;

@RestController
@RequestMapping(value = "/collections")
public class CollectionController {
	
	@Autowired
	private CollectionService service;
	
	// Recupera todas as coleções
	@GetMapping
	public Page<CollectionDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	// Recupera coleção por id com a lista das respectivas tags e recursos
	@GetMapping(value = "/{id}")
	public ResponseEntity<CollectionDTO> findById(@PathVariable Long id){
		CollectionDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
}
