package com.afonsosProjects.Crud_App;

import lombok.*;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

@Entity
@Data
@NoArgsConstructor
public class Contato {
    @Id
    @GeneratedValue
    private Long id;
    private @NonNull String name;
    private String email;
    private String phoneNumber;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String number) {
        this.phoneNumber = number;
    }

    @Override
    public String toString() {
        return "Contato [email=" + email + ", id=" + id + ", name=" + name + ", phoneNumber=" + phoneNumber + "]";
    }

    

}