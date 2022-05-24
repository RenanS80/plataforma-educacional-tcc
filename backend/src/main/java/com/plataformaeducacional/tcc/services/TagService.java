package com.plataformaeducacional.tcc.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plataformaeducacional.tcc.dto.TagDTO;
import com.plataformaeducacional.tcc.entities.Tag;
import com.plataformaeducacional.tcc.repositories.TagRepository;
import com.plataformaeducacional.tcc.services.exceptions.ResourceNotFoundException;

@Service
public class TagService {
	
	@Autowired
	private TagRepository repository;
		
	@Transactional(readOnly = true)
	public Page<TagDTO> findAll(Pageable pageable){
		Page<Tag> result = repository.findAll(pageable);
		
		// Converte Tag para TagDTO
		Page<TagDTO> page = result.map(x -> new TagDTO(x));
		return page;
	}
	@Transactional(readOnly = true)
	public TagDTO findById(Long id){
		Optional<Tag> obj = repository.findById(id);
		Tag entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entidade não encontrada"));
		return new TagDTO(entity);
	}
}

