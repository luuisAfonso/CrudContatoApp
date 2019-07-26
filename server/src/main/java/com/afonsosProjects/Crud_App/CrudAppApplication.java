package com.afonsosProjects.Crud_App;

//import java.util.stream.Stream;

//import com.afonsosProjects.Crud_App.model.Contato;
import com.afonsosProjects.Crud_App.repositories.ContatoRepository;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrudAppApplication.class, args);
        

    }

    @Bean
    ApplicationRunner init(ContatoRepository repository) {
        return null;
    }
}