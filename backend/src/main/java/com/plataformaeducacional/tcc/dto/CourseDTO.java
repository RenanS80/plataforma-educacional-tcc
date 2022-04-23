package com.plataformaeducacional.tcc.dto;

import java.time.Instant;

import com.plataformaeducacional.tcc.entities.Course;

public class CourseDTO extends CollectionDTO {
	private static final long serialVersionUID = 1L;
	
	private Instant registrationDate;
	
	public CourseDTO() {
	}

	public CourseDTO(Long id, String title, String description, String link, String platform, String image,
			Double score, Integer count, Instant registrationDate) {
		super(id, title, description, link, platform, image, score, count);
		this.registrationDate = registrationDate;
	}
	
	// Para facilitar a cópia dos objetos do Course para o DTO
	public CourseDTO(Course entity) {
		id = entity.getId();
		title = entity.getTitle();
		description = entity.getDescription();
		link = entity.getDescription();
		platform = entity.getPlatform();
		image = entity.getImage();
		score = entity.getScore();
		count = entity.getCount();
		registrationDate = entity.getRegistrationDate();
	}

	public Instant getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(Instant registrationDate) {
		this.registrationDate = registrationDate;
	}	
}
