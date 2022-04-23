package com.plataformaeducacional.tcc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plataformaeducacional.tcc.entities.Progress;
import com.plataformaeducacional.tcc.entities.ProgressPK;

public interface ProgressRepository extends JpaRepository<Progress, ProgressPK> {

}
