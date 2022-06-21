package com.plataformaeducacional.tcc.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.plataformaeducacional.tcc.entities.Collection;
import com.plataformaeducacional.tcc.entities.Progress;
import com.plataformaeducacional.tcc.entities.ProgressPK;
import com.plataformaeducacional.tcc.entities.User;

public interface ProgressRepository extends JpaRepository<Progress, ProgressPK> {
	
	@Query(value = "SELECT * FROM tb_user_collection_progress a "
			+ "INNER JOIN tb_user u "
			+ "INNER JOIN tb_collection c "
			+ "ON a.user_id = u.id "
			+ "ON a.collection_id = c.id "
			+ "WHERE a.user_id = ?", nativeQuery = true)
	Page<Progress> collectionsForCurrentUser(User user, Pageable pageable); 
}
