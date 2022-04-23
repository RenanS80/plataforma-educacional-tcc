package com.plataformaeducacional.tcc.dto;

import java.io.Serializable;
import java.time.Instant;

import com.plataformaeducacional.tcc.entities.Resource;

public class ResourceDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private String description;
	private String link;
	private Instant registrationDate;
	
	public ResourceDTO() {
	}

	public ResourceDTO(Long id, String title, String description, String link, Instant registrationDate) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.link = link;
		this.registrationDate = registrationDate;
	}
	
	// Para facilitar a cópia dos objetos do Resource para o DTO
	public ResourceDTO(Resource entity) {
		id = entity.getId();
		title = entity.getTitle();
		description = entity.getDescription();
		link = entity.getLink();
		registrationDate = entity.getRegistrationDate();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public Instant getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(Instant registrationDate) {
		this.registrationDate = registrationDate;
	}
}
