package com.plataformaeducacional.tcc.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_collection")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Collection implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 1024)
	private String title;
	
	@Column(length = 4096)
	private String description;
	
	@Column(length = 1024)
	private String link;
	private String platform;
	
	@Column(length = 1024)
	private String image;
	private Double score;
	private Integer count;
	
	@ManyToMany
	@JoinTable(name = "tb_collection_tag",
			joinColumns = @JoinColumn(name = "collection_id"),
			inverseJoinColumns = @JoinColumn(name = "tag_id"))
	private Set<Tag> tags = new HashSet<>();
	
	@ManyToMany
	@JoinTable(name = "tb_collection_resource",
			joinColumns = @JoinColumn(name = "collection_id"),
			inverseJoinColumns = @JoinColumn(name = "resource_id"))
	private Set<Resource> resources = new HashSet<>();
	
	
	public Collection() {
	}

	public Collection(Long id, String title, String description, String link, String platform, String image,
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

	public Set<Tag> getTags() {
		return tags;
	}

	public Set<Resource> getResources() {
		return resources;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Collection other = (Collection) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
