package com.plataformaeducacional.tcc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plataformaeducacional.tcc.dto.EventDTO;
import com.plataformaeducacional.tcc.services.EventService;

@RestController
@RequestMapping(value = "/events")
public class EventController {
	
	@Autowired
	private EventService service;
	
	// Lista todos os eventos paginados
	@GetMapping
	public Page<EventDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	// Recupera evento por id com a lista dos respectivos recursos e tags
	@GetMapping(value = "/{id}")
	public ResponseEntity<EventDTO> findById(@PathVariable Long id){
		EventDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
}