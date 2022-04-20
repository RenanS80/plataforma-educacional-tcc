package com.plataformaeducacional.tcc.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ProgressPK implements Serializable {
	private static final long serialVersionUID = 1L;
	
	// Configuração de chave estrangeira
	@ManyToOne
	@JoinColumn(name = "collection_id")
	private Collection collection;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	
	public ProgressPK() {
	}

	public Collection getCollection() {
		return collection;
	}

	public void setCollection(Collection collection) {
		this.collection = collection;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
