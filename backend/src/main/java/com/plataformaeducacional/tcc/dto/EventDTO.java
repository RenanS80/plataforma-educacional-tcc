package com.plataformaeducacional.tcc.dto;

import java.time.LocalDate;
import java.util.Set;

import com.plataformaeducacional.tcc.entities.Event;
import com.plataformaeducacional.tcc.entities.Resource;
import com.plataformaeducacional.tcc.entities.Tag;

public class EventDTO extends CollectionDTO {
	private static final long serialVersionUID = 1L;
	
	private LocalDate startDate;
	private LocalDate endDate;
	
	public EventDTO() {
	}
	
	public EventDTO(Long id, String title, String description, String link, String platform, String image, Double score,
			Integer count, CategoryDTO category, LocalDate startDate, LocalDate endDate) {
		super(id, title, description, link, platform, image, score, count, category);
		this.startDate = startDate;
		this.endDate = endDate;
	}

	// Para facilitar a cópia dos objetos do Event para o DTO
	public EventDTO(Event entity) {
		id = entity.getId();
		title = entity.getTitle();
		description = entity.getDescription();
		link = entity.getDescription();
		platform = entity.getPlatform();
		image = entity.getImage();
		score = entity.getScore();
		count = entity.getCount();
		category = new CategoryDTO(entity.getCategory());
		startDate = entity.getStartDate();
		endDate = entity.getEndDate();
	}
	
	// Para recuperar a lista de Tags associadas a uma Collection
	public EventDTO(Event entity, Set<Tag> tags, Set<Resource> resources) {
		this(entity);
		tags.forEach(x -> this.tags.add(new TagDTO(x)));
		resources.forEach(x -> this.resources.add(new ResourceDTO(x)));
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}
}
