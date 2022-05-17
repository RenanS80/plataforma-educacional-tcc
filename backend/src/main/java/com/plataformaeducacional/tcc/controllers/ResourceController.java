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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.plataformaeducacional.tcc.dto.ResourceDTO;
import com.plataformaeducacional.tcc.services.ResourceService;

@RestController
@RequestMapping(value = "/resources")
public class ResourceController {
	
	@Autowired
	private ResourceService service;
	
	// Lista todos os recursos paginados de acordo com o seu nome (opcional)
	@GetMapping
	public Page<ResourceDTO> findAll(
			@RequestParam(value = "title", defaultValue = "") String title,
			Pageable pageable){
		return service.findAll(title.trim(), pageable);
	}
	
	// Recupera recurso por id com a lista das respectivas tags
	@GetMapping(value = "/{id}")
	public ResponseEntity<ResourceDTO> findById(@PathVariable Long id){
		ResourceDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
	
	// Insere um novo recurso
	@PostMapping
	public ResponseEntity<ResourceDTO> insert(@RequestBody ResourceDTO dto){
		ResourceDTO newDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				  .buildAndExpand(newDto.getId()).toUri();
		return ResponseEntity.created(uri).body(newDto);
	}
	
	// Atualiza um recurso
	@PutMapping(value = "/{id}")
	public ResponseEntity<ResourceDTO> update(@PathVariable Long id, @RequestBody ResourceDTO dto){
		ResourceDTO newDto = service.update(id, dto);
		return ResponseEntity.ok().body(newDto);
	}
	
	// Deleta um recurso
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}

