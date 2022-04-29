package com.plataformaeducacional.tcc.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plataformaeducacional.tcc.dto.TagDTO;
import com.plataformaeducacional.tcc.entities.Tag;
import com.plataformaeducacional.tcc.repositories.TagRepository;

@Service
public class TagService {
	
	@Autowired
	private TagRepository repository;
		
	public List<TagDTO> findAll(){
		List<Tag> result = repository.findAll();
		return result.stream().map(x -> new TagDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public TagDTO findById(Long id){
		Optional<Tag> obj = repository.findById(id);
		Tag entity = obj.orElseThrow(() -> new EntityNotFoundException("Entidade não encontrada"));
		return new TagDTO(entity);
	}
}

