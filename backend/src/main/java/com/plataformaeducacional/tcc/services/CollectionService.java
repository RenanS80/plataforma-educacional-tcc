package com.plataformaeducacional.tcc.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plataformaeducacional.tcc.dto.CollectionDTO;
import com.plataformaeducacional.tcc.entities.Collection;
import com.plataformaeducacional.tcc.repositories.CollectionRepository;
import com.plataformaeducacional.tcc.services.exceptions.ResourceNotFoundException;

@Service
public class CollectionService {
	
	@Autowired
	private CollectionRepository repository;
	
	@Transactional(readOnly = true)
	public Page<CollectionDTO> findAll(Pageable pageable){
		Page<Collection> result = repository.findAll(pageable);
		
		// Converte Collection para CollectionDTO
		Page<CollectionDTO> page = result.map(x -> new CollectionDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public CollectionDTO findById(Long id){
		Optional<Collection> obj = repository.findById(id);
		Collection entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entidade não encontrada"));
		return new CollectionDTO(entity, entity.getTags(), entity.getResources());
	}
}
