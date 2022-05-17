package com.plataformaeducacional.tcc.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.plataformaeducacional.tcc.entities.Resource;

public interface ResourceRepository extends JpaRepository<Resource, Long> {
	
	@Query("SELECT obj FROM Resource obj WHERE "
			+ "(LOWER(obj.title) LIKE LOWER(CONCAT('%',:title,'%')))")
	Page<Resource> find(String title, Pageable pageable);
}
