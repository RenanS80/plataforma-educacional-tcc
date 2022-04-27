package com.plataformaeducacional.tcc.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plataformaeducacional.tcc.dto.ResourceDTO;
import com.plataformaeducacional.tcc.dto.TagDTO;
import com.plataformaeducacional.tcc.entities.Resource;
import com.plataformaeducacional.tcc.entities.Tag;
import com.plataformaeducacional.tcc.repositories.ResourceRepository;
import com.plataformaeducacional.tcc.repositories.TagRepository;
import com.plataformaeducacional.tcc.services.exceptions.DatabaseException;
import com.plataformaeducacional.tcc.services.exceptions.ResourceNotFoundException;

@Service
public class ResourceService {
	
	@Autowired
	private ResourceRepository repository;
	
	@Autowired
	private TagRepository tagRepository;
		
	@Transactional(readOnly = true)
	public Page<ResourceDTO> findAll(Pageable pageable){
		Page<Resource> result = repository.findAll(pageable);
		
		// Converte Resource para ResourceDTO
		Page<ResourceDTO> page = result.map(x -> new ResourceDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public ResourceDTO findById(Long id){
		Optional<Resource> obj = repository.findById(id);
		Resource entity = obj.orElseThrow(() -> new EntityNotFoundException("Entidade não encontrada"));
		return new ResourceDTO(entity, entity.getTags());
	}
	
	@Transactional
	public ResourceDTO insert(ResourceDTO dto) {
		Resource entity = new Resource();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ResourceDTO(entity);
	}
	
	@Transactional
	public ResourceDTO update(Long id, ResourceDTO dto) {
		try {
			Resource entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new ResourceDTO(entity);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id não encontrado " +id);
		}
	}
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id não encontrado " +id);
		}
		catch(DataIntegrityViolationException e) {
			throw new DatabaseException("Violação de integridade");
		}
	}
	
	private void copyDtoToEntity(ResourceDTO dto, Resource entity) {
		entity.setTitle(dto.getTitle());
		entity.setDescription(dto.getDescription());
		entity.setLink(dto.getLink());
		entity.setRegistrationDate(dto.getRegistrationDate());
		
		entity.getTags().clear();
		for(TagDTO tagDto : dto.getTags()){
			Tag tag = tagRepository.getOne(tagDto.getId());
			entity.getTags().add(tag);
		}
	}
}

