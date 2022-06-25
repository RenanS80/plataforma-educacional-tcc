package com.plataformaeducacional.tcc.dto;

import java.io.Serializable;

import com.plataformaeducacional.tcc.entities.CollectionStatus;
import com.plataformaeducacional.tcc.entities.Progress;

public class ProgressGetDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private CollectionDTO collection;
	private UserDTO user;
	private Double score;
	private CollectionStatus status;
	
	public ProgressGetDTO() {
	}
	
	public ProgressGetDTO(CollectionDTO collection, UserDTO user, Double score, CollectionStatus status) {
		super();
		this.collection = collection;
		this.user = user;
		this.score = score;
		this.status = status;
	}
	
	public ProgressGetDTO(Progress entity) {
		super();
		collection = new CollectionDTO(entity.getCollection());
		user = new UserDTO(entity.getUser());
		score = entity.getScore();
		status = entity.getStatus();
	}

	public CollectionDTO getCollection() {
		return collection;
	}

	public void setCollection(CollectionDTO collection) {
		this.collection = collection;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
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