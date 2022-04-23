package com.plataformaeducacional.tcc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plataformaeducacional.tcc.dto.CollectionDTO;
import com.plataformaeducacional.tcc.dto.ProgressDTO;
import com.plataformaeducacional.tcc.services.ProgressService;

@RestController
@RequestMapping(value = "/progress")
public class ProgressController {
	
	@Autowired
	private ProgressService service;
	
	@PutMapping
	public CollectionDTO saveProgress(@RequestBody ProgressDTO dto){
		CollectionDTO CollectionDto = service.saveProgress(dto);
		return CollectionDto;
	}
}
