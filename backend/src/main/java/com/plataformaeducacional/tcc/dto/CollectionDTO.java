package com.plataformaeducacional.tcc.dto;

import java.io.Serializable;

import com.plataformaeducacional.tcc.entities.Collection;

public class CollectionDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private String description;
	private String link;
	private String platform;
	private String image;
	private Double score;
	private Integer count;
	
	public CollectionDTO() {
	}

	public CollectionDTO(Long id, String title, String description, String link, String platform, String image,
			Double score, Integer count) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.link = link;
		this.platform = platform;
		this.image = image;
		this.score = score;
		this.count = count;
	}
	
	// Para facilitar a cópia dos objetos do Collection para o DTO
	public CollectionDTO(Collection collection) {
		id = collection.getId();
		title = collection.getTitle();
		description = collection.getDescription();
		link = collection.getDescription();
		platform = collection.getPlatform();
		image = collection.getImage();
		score = collection.getScore();
		count = collection.getCount();
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

	public String getPlatform() {
		return platform;
	}

	public void setPlatform(String platform) {
		this.platform = platform;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}	
}
