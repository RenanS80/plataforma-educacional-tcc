package com.plataformaeducacional.tcc.entities;

import java.time.Instant;
import java.util.List;

import javax.persistence.Column;

public class Event extends Collection {
	private static final long serialVersionUID = 1L;
	
	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Instant startDate;
	
	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Instant endDate;
	
	
	public Event() {
	}

	public Event(Long id, String title, String description, String link, String platform, String image, Double score,
			Integer count, List<String> tag, Instant startDate, Instant endDate) {
		super(id, title, description, link, platform, image, score, count, tag);
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public Instant getStartDate() {
		return startDate;
	}

	public void setStartDate(Instant startDate) {
		this.startDate = startDate;
	}

	public Instant getEndDate() {
		return endDate;
	}

	public void setEndDate(Instant endDate) {
		this.endDate = endDate;
	}
}
