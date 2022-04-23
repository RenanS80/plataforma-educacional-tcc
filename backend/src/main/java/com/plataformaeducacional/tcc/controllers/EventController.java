package com.plataformaeducacional.tcc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
	
	// Recupera todos os eventos
	@GetMapping
	public Page<EventDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	// Recupera um curso por id 
	@GetMapping(value = "/{id}")
	public EventDTO findById(@PathVariable Long id){
		return service.findById(id);
	}
}