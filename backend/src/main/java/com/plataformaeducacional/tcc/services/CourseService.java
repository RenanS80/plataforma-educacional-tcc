package com.plataformaeducacional.tcc.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plataformaeducacional.tcc.dto.CourseDTO;
import com.plataformaeducacional.tcc.dto.ResourceDTO;
import com.plataformaeducacional.tcc.dto.TagDTO;
import com.plataformaeducacional.tcc.entities.Course;
import com.plataformaeducacional.tcc.entities.Resource;
import com.plataformaeducacional.tcc.entities.Tag;
import com.plataformaeducacional.tcc.repositories.CourseRepository;
import com.plataformaeducacional.tcc.repositories.ResourceRepository;
import com.plataformaeducacional.tcc.repositories.TagRepository;
import com.plataformaeducacional.tcc.services.exceptions.DatabaseException;
import com.plataformaeducacional.tcc.services.exceptions.ResourceNotFoundException;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository repository;
	
	@Autowired
	private TagRepository tagRepository;
	
	@Autowired
	private ResourceRepository resourceRepository;
	
	@Transactional(readOnly = true)
	public Page<CourseDTO> findAll(Pageable pageable){
		Page<Course> result = repository.findAll(pageable);
		
		// Converte Course para CourseDTO
		Page<CourseDTO> page = result.map(x -> new CourseDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public CourseDTO findById(Long id){
		Optional<Course> obj = repository.findById(id);
		Course entity = obj.orElseThrow(() -> new EntityNotFoundException("Entidade não encontrada"));
		return new CourseDTO(entity, entity.getTags(), entity.getResources());
	}
		
	@Transactional
	public CourseDTO insert(CourseDTO dto) {
		Course entity = new Course();
		copyDtoToEntity(dto, entity);

		entity = repository.save(entity);
		return new CourseDTO(entity);
	}
	
	@Transactional
	public CourseDTO update(Long id, CourseDTO dto) {
		try {
			Course entity = repository.getOne(id);
			copyDtoToEntityUpdate(dto, entity);
			entity = repository.save(entity);
			return new CourseDTO(entity);
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
	
	
	private void copyDtoToEntity(CourseDTO dto, Course entity) {
		entity.setTitle(dto.getTitle());
		entity.setDescription(dto.getDescription());
		entity.setLink(dto.getLink());
		entity.setPlatform(dto.getPlatform());
		entity.setImage(dto.getImage());
		entity.setRegistrationDate(dto.getRegistrationDate());
		
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
		
		// Seta a quantidade de avaliações para 0 porque o curso acabou de ser inserido
		if(dto.getCount() == null) {
			entity.setCount(0);
		}
		
		// Seta a nova média de avaliações para 0 porque o curso acabou de ser inserido
		if(dto.getScore() == null) {
			entity.setScore(0.0);
		}
	}
	
	private void copyDtoToEntityUpdate(CourseDTO dto, Course entity) {
		entity.setTitle(dto.getTitle());
		entity.setDescription(dto.getDescription());
		entity.setLink(dto.getLink());
		entity.setPlatform(dto.getPlatform());
		entity.setImage(dto.getImage());
		entity.setRegistrationDate(dto.getRegistrationDate());
		
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
		
		// Recupera a quantidade de avaliações corrente caso ela não seja alterada no update
		if(dto.getCount() != null) {
			entity.setCount(dto.getCount());
		}
		
		// Recupera a média de avaliações corrente caso ela não seja alterada no update
		if(dto.getScore() != null) {
			entity.setScore(dto.getScore());
		}
	}
}
