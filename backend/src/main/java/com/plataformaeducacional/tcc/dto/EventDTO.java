package com.plataformaeducacional.tcc.dto;

import java.time.Instant;

import com.plataformaeducacional.tcc.entities.Event;

public class EventDTO extends CollectionDTO {
	private static final long serialVersionUID = 1L;
	
	private Instant startDate;
	private Instant endDate;
	
	public EventDTO() {
	}

	public EventDTO(Long id, String title, String description, String link, String platform, String image, Double score,
			Integer count, Instant startDate, Instant endDate) {
		super(id, title, description, link, platform, image, score, count);
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
		startDate = entity.getStartDate();
		endDate = entity.getEndDate();
	}

	public Instant getStartDate() {
		return startDate;
	}

	public void setStartDate(Instant startDate) {
		this.startDate = startDate;
	}

	public Instant getEndDate() {
		return endDate;
	}

	public void setEndDate(Instant endDate) {
		this.endDate = endDate;
	}
}