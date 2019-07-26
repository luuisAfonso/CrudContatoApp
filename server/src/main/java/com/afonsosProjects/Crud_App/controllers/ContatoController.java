package com.afonsosProjects.Crud_App.controllers;

import com.afonsosProjects.Crud_App.repositories.ContatoRepository;
import com.afonsosProjects.Crud_App.model.Contato;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ContatoController {
    private ContatoRepository repository;

    public ContatoController(ContatoRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/contatos-list")
    public Collection<Contato> contatos() {
        return repository.findAll().stream()
                .collect(Collectors.toList());
    }
}