package com.afonsosProjects.Crud_App;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "contatos", path = "contatos")
interface ContatoRepository extends JpaRepository<Contato, Long> {
}