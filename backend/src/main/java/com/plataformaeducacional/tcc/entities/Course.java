package com.plataformaeducacional.tcc.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@PrimaryKeyJoinColumn(name = "id")
@Table(name = "tb_course")
public class Course extends Collection {
	private static final long serialVersionUID = 1L;
	
	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private LocalDate registrationDate;
	
	
	public Course() {
	}

	public Course(Long id, String title, String description, String link, String platform, String image, Double score,
			Integer count, Category category, LocalDate registrationDate) {
		super(id, title, description, link, platform, image, score, count, category);
		this.registrationDate = registrationDate;
	}

	public LocalDate getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(LocalDate registrationDate) {
		this.registrationDate = registrationDate;
	}
}
