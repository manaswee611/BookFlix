package com.example.demoRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.DemoModel.User;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {

}
