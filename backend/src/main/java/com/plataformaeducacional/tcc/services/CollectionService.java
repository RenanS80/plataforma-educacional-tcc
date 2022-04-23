package com.plataformaeducacional.tcc.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plataformaeducacional.tcc.dto.CollectionDTO;
import com.plataformaeducacional.tcc.entities.Collection;
import com.plataformaeducacional.tcc.repositories.CollectionRepository;

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
		Collection result = repository.findById(id).get();
		
		// Converte Collection para CollectionDTO
		CollectionDTO dto = new CollectionDTO(result);
		return dto;
	}
}
