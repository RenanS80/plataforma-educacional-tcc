package com.plataformaeducacional.tcc.dto;

import java.io.Serializable;

import com.plataformaeducacional.tcc.entities.Tag;

public class TagDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	public TagDTO() {
	}

	public TagDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	// Para facilitar a cópia dos objetos do Tag para o DTO
	public TagDTO(Tag entity) {
		id = entity.getId();
		name = entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
