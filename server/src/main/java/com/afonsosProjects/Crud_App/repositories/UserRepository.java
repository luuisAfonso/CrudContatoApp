package com.afonsosProjects.Crud_App.repositories;

import com.afonsosProjects.Crud_App.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{

    User findUserById(Long id); 
}