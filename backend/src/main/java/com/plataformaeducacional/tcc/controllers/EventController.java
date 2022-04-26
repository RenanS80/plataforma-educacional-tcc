package com.plataformaeducacional.tcc.controllers;

import java.net.URI;

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
	
	// Insere um novo evento
	@PostMapping
	public ResponseEntity<EventDTO> insert(@RequestBody EventDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	// Atualiza um evento
	@PutMapping(value = "/{id}")
	public ResponseEntity<EventDTO> update(@PathVariable Long id, @RequestBody EventDTO dto){
		EventDTO newDto = service.update(id, dto);
		return ResponseEntity.ok().body(newDto);
	}
	
	// Deleta um curso
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}