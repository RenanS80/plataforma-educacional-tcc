package com.plataformaeducacional.tcc.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Resource implements Serializable { 
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private String description;
	private String link;
	private String image;
	private List<String> tag = new ArrayList<>();
	
	public Resource() {
	}

	public Resource(Long id, String title, String description, String link, String image, List<String> tag) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.link = link;
		this.image = image;
		this.tag = tag;
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<String> getTag() {
		return tag;
	}

	public void setTag(List<String> tag) {
		this.tag = tag;
	}
}
