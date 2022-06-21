package com.plataformaeducacional.tcc.entities;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_user_collection_progress")
public class Progress implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@EmbeddedId
	private ProgressPK id = new ProgressPK();
	private Double score;
	private CollectionStatus status;
	
	public Progress() {
	}
		
	public Progress(User user, Collection collection, Double score, CollectionStatus status) {
		super();
		id.setUser(user);
		id.setCollection(collection);
		this.score = score;
		this.status = status;
	}
		
	public User getUser() {
		return id.getUser();
	}
	
	public void setUser(User user) {
		id.setUser(user);
	}
	
	public Collection getCollection() {
		return id.getCollection();
	}
	
	public void setCollection(Collection collection) {
		id.setCollection(collection);
	}
	
	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public CollectionStatus getStatus() {
		return status;
	}

	public void setStatus(CollectionStatus status) {
		this.status = status;
	}
}