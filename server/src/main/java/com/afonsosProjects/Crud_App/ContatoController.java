package com.afonsosProjects.Crud_App;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
class ContatoController {
    private ContatoRepository repository;

    public ContatoController(ContatoRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/contatos-list")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Contato> contatos() {
        return repository.findAll().stream()
                .collect(Collectors.toList());
    }
}