package com.plataformaeducacional.tcc.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plataformaeducacional.tcc.dto.CollectionDTO;
import com.plataformaeducacional.tcc.dto.ProgressDTO;
import com.plataformaeducacional.tcc.dto.ProgressGetDTO;
import com.plataformaeducacional.tcc.entities.Collection;
import com.plataformaeducacional.tcc.entities.CollectionStatus;
import com.plataformaeducacional.tcc.entities.Progress;
import com.plataformaeducacional.tcc.entities.User;
import com.plataformaeducacional.tcc.repositories.CollectionRepository;
import com.plataformaeducacional.tcc.repositories.ProgressRepository;
import com.plataformaeducacional.tcc.repositories.UserRepository;

@Service
public class ProgressService {
	
	@Autowired
	private CollectionRepository collectionRepository;
		
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ProgressRepository progressRepository;
	
	@Autowired
	private AuthService authService;
	
	@Transactional(readOnly = true)
	public Page<ProgressGetDTO> coursesForCurrentUser(Pageable pageable){
		User user = authService.authenticated();
				
		Page<Progress> page = progressRepository.coursesForCurrentUser(user, pageable);
		return page.map(x -> new ProgressGetDTO(x));
	}
	
	@Transactional(readOnly = true)
	public Page<ProgressGetDTO> eventsForCurrentUser(Pageable pageable){
		User user = authService.authenticated();
				
		Page<Progress> page = progressRepository.eventsForCurrentUser(user, pageable);
		return page.map(x -> new ProgressGetDTO(x));
	}
	
	@Transactional
	public CollectionDTO saveProgress(ProgressDTO dto) {
		User user = userRepository.findById(dto.getUserId()).get();
		Collection collection = collectionRepository.findById(dto.getCollectionId()).get();
		
		Progress progress = new Progress();
		progress.setCollection(collection);
		progress.setUser(user);
		progress.setScore(dto.getScore());
		progress.setStatus(dto.getStatus());
		
		progress = progressRepository.saveAndFlush(progress);
		
		double sum = 0.0;
		for (Progress p : collection.getProgresses()) {
			sum = sum + p.getScore();
		}
		
		double avg = sum / collection.getProgresses().size();
		
		collection.setScore(avg);
		collection.setCount(collection.getProgresses().size());
		
		collection = collectionRepository.save(collection);
		
		return new CollectionDTO(collection);
	}
	
	@Transactional
	public CollectionDTO subscribeCollection(ProgressDTO dto) {
		User user = userRepository.findById(dto.getUserId()).get();
		Collection collection = collectionRepository.findById(dto.getCollectionId()).get();
		
		Progress progress = new Progress();
		progress.setCollection(collection);
		progress.setUser(user);
		progress.setScore(null);
		progress.setStatus(CollectionStatus.Cursando);
		
		progress = progressRepository.saveAndFlush(progress);
		
		return new CollectionDTO(collection);
	}
}
