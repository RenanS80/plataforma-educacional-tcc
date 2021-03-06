package com.plataformaeducacional.tcc.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plataformaeducacional.tcc.dto.RoleDTO;
import com.plataformaeducacional.tcc.dto.UserDTO;
import com.plataformaeducacional.tcc.dto.UserInsertDTO;
import com.plataformaeducacional.tcc.dto.UserUpdateDTO;
import com.plataformaeducacional.tcc.entities.Role;
import com.plataformaeducacional.tcc.entities.User;
import com.plataformaeducacional.tcc.repositories.RoleRepository;
import com.plataformaeducacional.tcc.repositories.UserRepository;
import com.plataformaeducacional.tcc.services.exceptions.DatabaseException;
import com.plataformaeducacional.tcc.services.exceptions.ResourceNotFoundException;

@Service
public class UserService implements UserDetailsService {
	
	private static Logger logger = LoggerFactory.getLogger(UserService.class);
	
	@Autowired
	private AuthService authService;
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
		
	@Transactional(readOnly = true)
	public Page<UserDTO> findAll(Pageable pageable){
		Page<User> result = repository.findAll(pageable);
		
		// Converte User para UserDTO
		Page<UserDTO> page = result.map(x -> new UserDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public UserDTO findById(Long id){
		authService.ValidateSelfOrAdmin(id);
		Optional<User> obj = repository.findById(id);
		User entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entidade n??o encontrada"));
		return new UserDTO(entity);
	}
	
	@Transactional
	public UserDTO insert(UserInsertDTO dto) {
		User entity = new User();
		copyDtoToEntityInsert(dto, entity);
		
		// Criptografa a senha com o BCrypt para ser salva no banco de dados
		entity.setPassword(passwordEncoder.encode(dto.getPassword()));
		entity = repository.save(entity);
		return new UserDTO(entity);
	}
	
	@Transactional
	public UserDTO update(Long id, UserUpdateDTO dto) {
		try {
			User entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new UserDTO(entity);
		}
		catch (EntityNotFoundException e) {
			throw new EntityNotFoundException("Id n??o encontrado " +id);
		}
	}
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch(EmptyResultDataAccessException e) {
			throw new EntityNotFoundException("Id n??o encontrado " +id);
		}
		catch(DataIntegrityViolationException e) {
			throw new DatabaseException("Viola????o de integridade");
		}
	}
	
	private void copyDtoToEntity(UserDTO dto, User entity) {
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		
		entity.getRoles().clear();
		for(RoleDTO roleDto : dto.getRoles()){
			Role role = roleRepository.getOne(roleDto.getId());
			entity.getRoles().add(role);
		}
	}
	
	private void copyDtoToEntityInsert(UserDTO dto, User entity) {
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
				
		entity.getRoles().clear();
		for(RoleDTO roleDto : dto.getRoles()){
			Role role = roleRepository.getOne(roleDto.getId());
			entity.getRoles().add(role);
		}
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByEmail(username);
		
		if(user == null) {
			logger.error("Usu??rio n??o encontrado " +username);
			throw new UsernameNotFoundException("E-mail n??o encontrado");
		}
		
		logger.info("Usu??rio encontrado " +username);
		return user;
	}
}

