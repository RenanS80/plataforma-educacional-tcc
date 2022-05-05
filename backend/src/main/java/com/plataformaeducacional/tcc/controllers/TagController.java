package com.plataformaeducacional.tcc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	// Lista todas as tags 
	@GetMapping
	public ResponseEntity<List<TagDTO>> findAll(){
		List<TagDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}
	
	// Recupera tag por id
	@GetMapping(value = "/{id}")
	public ResponseEntity<TagDTO> findById(@PathVariable Long id){
		TagDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
}

