package com.example.demo.Variables;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor

@Table (name = "Employee")
public class Employee {
    @Id
    @GeneratedValue
    private Long id ;
    private String name;
    private String lastname;



}
