package com.plataformaeducacional.tcc.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Collection implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private String description;
	private String link;
	private String platform;
	private String image;
	private Double score;
	private Integer count;
	private List<String> tag = new ArrayList<>();
	
	public Collection() {
	}

	public Collection(Long id, String title, String description, String link, String platform, String image,
			Double score, Integer count, List<String> tag) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.link = link;
		this.platform = platform;
		this.image = image;
		this.score = score;
		this.count = count;
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

	public List<String> getTag() {
		return tag;
	}

	public void setTag(List<String> tag) {
		this.tag = tag;
	}	
}
