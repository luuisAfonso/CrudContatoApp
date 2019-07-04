package com.afonsosProjects.Crud_App;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.stream.Stream;

@SpringBootApplication
public class CrudAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrudAppApplication.class, args);
    }

    @Bean
    ApplicationRunner init(ContatoRepository repository) {
        return args -> {
            Stream.of("afonso", "alessa", "fernanda", "hezamone", "augusto").forEach(name -> {
                Contato contato = new Contato();
                contato.setName(name);
                if(Math.random() > 0.5){
                    contato.setEmail(name + "@email.com");
                }
                if(Math.random() > 0.5){
                    contato.setPhoneNumber("99999-9999");
                }
                repository.save(contato);
            });
            repository.findAll().forEach((contato) -> System.out.println(contato.toString()));
        };
    }
}