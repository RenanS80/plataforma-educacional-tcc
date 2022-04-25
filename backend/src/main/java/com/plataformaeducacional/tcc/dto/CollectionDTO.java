package com.plataformaeducacional.tcc.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.plataformaeducacional.tcc.entities.Collection;
import com.plataformaeducacional.tcc.entities.Resource;
import com.plataformaeducacional.tcc.entities.Tag;

public class CollectionDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	protected Long id;
	protected String title;
	protected String description;
	protected String link;
	protected String platform;
	protected String image;
	protected Double score;
	protected Integer count;
	
	protected Set<TagDTO> tags = new HashSet<>();
	protected Set<ResourceDTO> resources = new HashSet<>();
	
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
	public CollectionDTO(Collection entity) {
		id = entity.getId();
		title = entity.getTitle();
		description = entity.getDescription();
		link = entity.getDescription();
		platform = entity.getPlatform();
		image = entity.getImage();
		score = entity.getScore();
		count = entity.getCount();
	}
	
	// Para recuperar a lista de Tags e Resources associados a uma Collection
	public CollectionDTO(Collection entity, Set<Tag> tags, Set<Resource> resources) {
		this(entity);
		tags.forEach(x -> this.tags.add(new TagDTO(x)));
		resources.forEach(x -> this.resources.add(new ResourceDTO(x)));
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

	public Set<TagDTO> getTags() {
		return tags;
	}

	public Set<ResourceDTO> getResources() {
		return resources;
	}
}
