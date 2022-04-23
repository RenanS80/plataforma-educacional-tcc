package com.plataformaeducacional.tcc.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plataformaeducacional.tcc.dto.CourseDTO;
import com.plataformaeducacional.tcc.entities.Course;
import com.plataformaeducacional.tcc.repositories.CourseRepository;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository repository;
	
	@Transactional(readOnly = true)
	public Page<CourseDTO> findAll(Pageable pageable){
		Page<Course> result = repository.findAll(pageable);
		
		// Converte Course para CourseDTO
		Page<CourseDTO> page = result.map(x -> new CourseDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public CourseDTO findById(Long id){
		Course result = repository.findById(id).get();
		
		// Converte Course para CourseDTO
		CourseDTO dto = new CourseDTO(result);
		return dto;
	}
}
