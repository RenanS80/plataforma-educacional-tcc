package com.plataformaeducacional.tcc.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plataformaeducacional.tcc.dto.EventDTO;
import com.plataformaeducacional.tcc.entities.Event;
import com.plataformaeducacional.tcc.repositories.EventRepository;

@Service
public class EventService {
	
	@Autowired
	private EventRepository repository;
	
	@Transactional(readOnly = true)
	public Page<EventDTO> findAll(Pageable pageable){
		Page<Event> result = repository.findAll(pageable);
		
		// Converte Event para EventDTO
		Page<EventDTO> page = result.map(x -> new EventDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public EventDTO findById(Long id){
		Event result = repository.findById(id).get();
		
		// Converte Event para EventDTO
		EventDTO dto = new EventDTO(result);
		return dto;
	}
}
