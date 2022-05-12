package com.plataformaeducacional.tcc.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.plataformaeducacional.tcc.entities.Event;

public interface EventRepository extends JpaRepository<Event, Long> {
	
	@Query(value = "select *, 0 AS clazz_ from tb_event e join tb_collection c on e.id = c.id where c.category_id = ?", nativeQuery = true)
	Page<Event> findAllEventsByCategoryId(Pageable pageable, Long id);
}
