package com.plataformaeducacional.tcc.dto;

import java.time.LocalDate;
import java.util.Set;

import com.plataformaeducacional.tcc.entities.Course;
import com.plataformaeducacional.tcc.entities.Resource;
import com.plataformaeducacional.tcc.entities.Tag;

public class CourseDTO extends CollectionDTO {
	private static final long serialVersionUID = 1L;
	
	private LocalDate registrationDate;
	
	public CourseDTO() {
	}
	
	public CourseDTO(Long id, String title, String description, String link, String platform, String image,
			Double score, Integer count, CategoryDTO category, LocalDate registrationDate) {
		super(id, title, description, link, platform, image, score, count, category);
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
		category = new CategoryDTO(entity.getCategory());
		registrationDate = entity.getRegistrationDate();
	}
	
	// Para recuperar a lista de Tags e Resources associadas a um Course
	public CourseDTO(Course entity, Set<Tag> tags, Set<Resource> resources) {
		this(entity);
		tags.forEach(x -> this.tags.add(new TagDTO(x)));
		resources.forEach(x -> this.resources.add(new ResourceDTO(x)));
	}

	public LocalDate getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(LocalDate registrationDate) {
		this.registrationDate = registrationDate;
	}	
}
