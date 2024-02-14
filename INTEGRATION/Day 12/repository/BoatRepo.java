package com.example.boathouse.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.boathouse.model.BoatDetails;

@Repository
public interface BoatRepo extends JpaRepository<BoatDetails,Integer> {

    Optional<BoatDetails> findByPrice(String price);

    Optional<BoatDetails> findByType(String type);

    Optional<BoatDetails> findByBoatName(String boatName);

    List<BoatDetails> findByFromTime(String fromTime);
}
