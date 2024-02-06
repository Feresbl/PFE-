package com.test.sampleJavaCrud.repository;

import com.test.sampleJavaCrud.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Long> {

}
