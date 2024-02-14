package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeAPI {
    @GetMapping("/bienvenu")
    public  String Welcome(){
        return  "Welcome to my firstApi";
    }
}
