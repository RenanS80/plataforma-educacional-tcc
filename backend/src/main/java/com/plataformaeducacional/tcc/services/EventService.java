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

import com.plataformaeducacional.tcc.dto.EventDTO;
import com.plataformaeducacional.tcc.dto.ResourceDTO;
import com.plataformaeducacional.tcc.dto.TagDTO;
import com.plataformaeducacional.tcc.entities.Category;
import com.plataformaeducacional.tcc.entities.Event;
import com.plataformaeducacional.tcc.entities.Resource;
import com.plataformaeducacional.tcc.entities.Tag;
import com.plataformaeducacional.tcc.repositories.CategoryRepository;
import com.plataformaeducacional.tcc.repositories.EventRepository;
import com.plataformaeducacional.tcc.repositories.ResourceRepository;
import com.plataformaeducacional.tcc.repositories.TagRepository;
import com.plataformaeducacional.tcc.services.exceptions.DatabaseException;
import com.plataformaeducacional.tcc.services.exceptions.ResourceNotFoundException;

@Service
public class EventService {
	
	@Autowired
	private EventRepository repository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private TagRepository tagRepository;
	
	@Autowired
	private ResourceRepository resourceRepository;
	
	@Transactional(readOnly = true)
	public Page<EventDTO> findAll(Long categoryId, String title, Pageable pageable){
		Category category = (categoryId == 0) ? null : categoryRepository.getOne(categoryId) ;
		Page<Event> result = repository.find(category, title, pageable);
		
		// Converte Event para EventDTO
		Page<EventDTO> page = result.map(x -> new EventDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public EventDTO findById(Long id){
		Optional<Event> obj = repository.findById(id);
		Event entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entidade n??o encontrada"));
		return new EventDTO(entity, entity.getTags(), entity.getResources());
	}
		
	@Transactional
	public EventDTO insert(EventDTO dto) {
		Event entity = new Event();
		copyDtoToEntity(dto, entity);

		entity = repository.save(entity);
		return new EventDTO(entity);
	}
	
	@Transactional
	public EventDTO update(Long id, EventDTO dto) {
		try {
			Event entity = repository.getOne(id);
			copyDtoToEntityUpdate(dto, entity);
			entity = repository.save(entity);
			return new EventDTO(entity);
		}
		catch (EntityNotFoundException e) {
			throw new EntityNotFoundException("Id n??o encontrado " +id);
		}
	}
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch(EmptyResultDataAccessException e) {
			throw new EntityNotFoundException("Id n??o encontrado " +id);
		}
		catch(DataIntegrityViolationException e) {
			throw new DatabaseException("Viola????o de integridade");
		}
	}
	
	
	private void copyDtoToEntity(EventDTO dto, Event entity) {
		entity.setTitle(dto.getTitle());
		entity.setDescription(dto.getDescription());
		entity.setLink(dto.getLink());
		entity.setPlatform(dto.getPlatform());
		entity.setImage(dto.getImage());
		Category cat = categoryRepository.getOne(dto.getCategory().getId());
		entity.setCategory(cat); 
		entity.setStartDate(dto.getStartDate());
		entity.setEndDate(dto.getEndDate());
		
		entity.getTags().clear();
		for(TagDTO tagDto : dto.getTags()){
			Tag tag = tagRepository.getOne(tagDto.getId());
			entity.getTags().add(tag);
		}
		
		entity.getResources().clear();
		for(ResourceDTO resourceDto : dto.getResources()){
			Resource resource = resourceRepository.getOne(resourceDto.getId());
			entity.getResources().add(resource);
		}
		
		// Seta a quantidade de avalia????es para 0 porque o evento acabou de ser inserido
		if(dto.getCount() == null) {
			entity.setCount(0);
		}
		
		// Seta a nova de avalia????es para 0 porque o evento acabou de ser inserido
		if(dto.getScore() == null) {
			entity.setScore(0.0);
		}
	}
	
	private void copyDtoToEntityUpdate(EventDTO dto, Event entity) {
		entity.setTitle(dto.getTitle());
		entity.setDescription(dto.getDescription());
		entity.setLink(dto.getLink());
		entity.setPlatform(dto.getPlatform());
		entity.setImage(dto.getImage());
		Category cat = categoryRepository.getOne(dto.getCategory().getId());
		entity.setCategory(cat); 
		entity.setStartDate(dto.getStartDate());
		entity.setEndDate(dto.getEndDate());
		
		entity.getTags().clear();
		for(TagDTO tagDto : dto.getTags()){
			Tag tag = tagRepository.getOne(tagDto.getId());
			entity.getTags().add(tag);
		}
		
		entity.getResources().clear();
		for(ResourceDTO resourceDto : dto.getResources()){
			Resource resource = resourceRepository.getOne(resourceDto.getId());
			entity.getResources().add(resource);
		}
		
		// Recupera a quantidade de avalia????es corrente caso ela n??o seja alterada no update
		if(dto.getCount() != null) {
			entity.setCount(dto.getCount());
		}
		
		// Recupera a m??dia de avalia????es corrente caso ela n??o seja alterada no update
		if(dto.getScore() != null) {
			entity.setScore(dto.getScore());
		}
	}
}
