package com.plataformaeducacional.tcc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plataformaeducacional.tcc.dto.CollectionDTO;
import com.plataformaeducacional.tcc.dto.ProgressDTO;
import com.plataformaeducacional.tcc.dto.ProgressGetDTO;
import com.plataformaeducacional.tcc.services.ProgressService;

@RestController
@RequestMapping(value = "/progress")
public class ProgressController {
	
	@Autowired
	private ProgressService service;
	
	// Cursos paginados do usuário logado
	@GetMapping(value = "/courses")
	public ResponseEntity<Page<ProgressGetDTO>> coursesForCurrentUser(Pageable pageable){
		Page<ProgressGetDTO> page = service.coursesForCurrentUser(pageable);
		return ResponseEntity.ok().body(page);
	}
	
	// Eventos paginados do usuário logado
	@GetMapping(value = "/events")
	public ResponseEntity<Page<ProgressGetDTO>> eventsForCurrentUser(Pageable pageable){
		Page<ProgressGetDTO> page = service.eventsForCurrentUser(pageable);
		return ResponseEntity.ok().body(page);
	}
	
	@PutMapping
	public CollectionDTO saveProgress(@RequestBody ProgressDTO dto){
		CollectionDTO collectionDto = service.saveProgress(dto);
		return collectionDto;
	}
	
	@PostMapping
	public CollectionDTO subscribeCollection(@RequestBody ProgressDTO dto){
		CollectionDTO collectionDto = service.subscribeCollection(dto);
		return collectionDto;
	}
}
