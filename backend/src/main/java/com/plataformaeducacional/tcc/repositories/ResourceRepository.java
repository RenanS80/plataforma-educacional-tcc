package com.plataformaeducacional.tcc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plataformaeducacional.tcc.entities.Resource;

public interface ResourceRepository extends JpaRepository<Resource, Long> {

}
