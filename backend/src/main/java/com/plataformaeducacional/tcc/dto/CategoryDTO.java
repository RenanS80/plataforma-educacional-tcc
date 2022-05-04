package com.plataformaeducacional.tcc.dto;

import java.io.Serializable;

import com.plataformaeducacional.tcc.entities.Category;

public class CategoryDTO implements Serializable {
	private static final long serialVersionUID = 1L;
		
	private Long id;
	private String name;
	private String image;
	
	public CategoryDTO() {
	}

	public CategoryDTO(Long id, String name, String image) {
		this.id = id;
		this.name = name;
		this.image = image;
	}
	
	public CategoryDTO(Category entity) {
		id = entity.getId();
		name = entity.getName();
		image = entity.getImage();
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}	
}
