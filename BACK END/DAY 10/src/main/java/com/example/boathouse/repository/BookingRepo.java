package com.example.boathouse.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.boathouse.model.BookingDetails;

@Repository
public interface BookingRepo extends JpaRepository<BookingDetails,Integer>{

    Optional<BookingDetails> findByUserId(int userId);

}
