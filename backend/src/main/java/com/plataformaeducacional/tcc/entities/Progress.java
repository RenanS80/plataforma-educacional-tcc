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
	private Double scoreValue;
	private CollectionStatus status;
	
	
	public Progress() {
	}
	
	// Associa uma Collection a um Score
	public void setCollection(Collection collection) {
		id.setCollection(collection);
	}
	
	// Associa um User a um Score
	public void setUser(User user) {
		id.setUser(user);
	}

	public ProgressPK getId() {
		return id;
	}

	public void setId(ProgressPK id) {
		this.id = id;
	}

	public Double getScoreValue() {
		return scoreValue;
	}

	public void setScoreValue(Double scoreValue) {
		this.scoreValue = scoreValue;
	}

	public CollectionStatus getStatus() {
		return status;
	}

	public void setStatus(CollectionStatus status) {
		this.status = status;
	}
}
