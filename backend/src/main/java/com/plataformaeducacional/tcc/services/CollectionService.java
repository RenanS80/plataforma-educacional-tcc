package com.plataformaeducacional.tcc.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

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
		Optional<Collection> obj = repository.findById(id);
		Collection entity = obj.orElseThrow(() -> new EntityNotFoundException("Entidade não encontrada"));
		return new CollectionDTO(entity, entity.getTags(), entity.getResources());
	}
	
	@Transactional(readOnly = true)
	public List<CollectionDTO> findAllCollectionsByCategoryId(Long id){
		List<Collection> result = repository.findAllCollectionsByCategoryId(id);
		return result.stream().map(x -> new CollectionDTO(x)).collect(Collectors.toList());
	}
}
