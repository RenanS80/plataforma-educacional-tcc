package com.plataformaeducacional.tcc.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plataformaeducacional.tcc.entities.User;
import com.plataformaeducacional.tcc.repositories.UserRepository;
import com.plataformaeducacional.tcc.services.exceptions.ForbiddenException;
import com.plataformaeducacional.tcc.services.exceptions.UnauthorizedException;

@Service
public class AuthService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public User authenticated() {
		try {
			String username = SecurityContextHolder.getContext().getAuthentication().getName();		// recupera o nome do usuário autenticado
			return userRepository.findByEmail(username);
		}
		catch(Exception e) {
			throw new UnauthorizedException("Usuário inválido");
		}
	}
	
	public void ValidateSelfOrAdmin(Long userId) {
		User user = authenticated();
		if(!user.getId().equals(userId) && !user.hasRole("ROLE_ADMIN")) {
			throw new ForbiddenException("Acesso negado");
		}
	}
}
