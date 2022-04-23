package com.plataformaeducacional.tcc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plataformaeducacional.tcc.entities.Event;

public interface EventRepository extends JpaRepository<Event, Long> {

}
