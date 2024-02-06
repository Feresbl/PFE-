package com.test.sampleJavaCrud.controller;

import com.test.sampleJavaCrud.model.User;
import com.test.sampleJavaCrud.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3003")
public class Usercontroller {

    @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
    @GetMapping("/users")
    List<User> getAllusers(){
        return userRepository.findAll();
    }
}
