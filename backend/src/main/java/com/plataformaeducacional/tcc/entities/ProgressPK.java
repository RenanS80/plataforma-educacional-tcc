package com.plataformaeducacional.tcc.entities;

import java.io.Serializable;

public class ProgressPK implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Collection collection;
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
