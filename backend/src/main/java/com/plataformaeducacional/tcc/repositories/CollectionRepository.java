package com.plataformaeducacional.tcc.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.plataformaeducacional.tcc.entities.Collection;

public interface CollectionRepository extends JpaRepository<Collection, Long> {
	@Query(value = "select *, 0 AS clazz_ from tb_collection c where c.category_id = ?", nativeQuery = true)
    List<Collection> findAllCollectionsByCategoryId(Long id);
}
