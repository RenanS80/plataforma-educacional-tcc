package com.plataformaeducacional.tcc.dto;

import java.io.Serializable;

import com.plataformaeducacional.tcc.entities.CollectionStatus;
import com.plataformaeducacional.tcc.entities.Progress;

public class ProgressInsertDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long collectionId;
	private Long userId;
	private Double score;
	private CollectionStatus status;
	
	public ProgressInsertDTO() {
	}
	
	public ProgressInsertDTO(Long collectionId, Long userId, Double score, CollectionStatus status) {
		super();
		this.collectionId = collectionId;
		this.userId = userId;
		this.score = score;
		this.status = status;
	}
	
	public ProgressInsertDTO(Progress entity) {
		super();
		collectionId = entity.getCollection().getId();
		userId = entity.getUser().getId();
		score = entity.getScore();
		status = entity.getStatus();
	}


	public Long getCollectionId() {
		return collectionId;
	}

	public void setCollectionId(Long collectionId) {
		this.collectionId = collectionId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
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