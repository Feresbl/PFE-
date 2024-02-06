package com.test.sampleJavaCrud.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity

public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String name;
    private String email;

    public String getUsername() {
        return username;
    }
    public Long getId(){
        return  id;
    }
    public String getName(){
        return  name;
    }
    public String getEmail(){
        return email;
    }
    public  void setId(Long id){
        this.id=id;
    }
    public void setName(String name){
        this.name=name;
    }
    public void setEmail(String email){
        this.email=email;
    }
    public void setUsername(String username){
        this.username=username;
    }
}
