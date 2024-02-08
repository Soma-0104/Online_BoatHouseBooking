package com.example.boathouse.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boathouse.model.BoatDetails;
import com.example.boathouse.repository.BoatRepo;

@Service
public class BoatService {
    @Autowired
    BoatRepo repo;
    
    public String addBoat(BoatDetails boat){
        repo.save(boat);
        return "Boat Added";
    }
    
    public List<BoatDetails> getAllBoats(){
        return repo.findAll();
    }
    
    public Optional<BoatDetails> getByPrice(String price){
        return repo.findByPrice(price);
    }
    
    public Optional<BoatDetails> getById(int id){
        return repo.findById(id);
    }
    
    public Optional<BoatDetails> getByType(String type){
        return repo.findByType(type);
    }
    
    public Optional<BoatDetails> getByName(String boatName){
        return repo.findByBoatName(boatName);
    }
    
    public List<BoatDetails> getByTime(String fromTime){
        return repo.findByFromTime(fromTime);
    }
    
    public String updateBoat(int id, BoatDetails updatedBoat) {
        Optional<BoatDetails> optionalBoat = repo.findById(id);
        if (optionalBoat.isPresent()) {
            BoatDetails existingBoat = optionalBoat.get();
            existingBoat.setBoatName(updatedBoat.getBoatName());
            existingBoat.setPrice(updatedBoat.getPrice());
            existingBoat.setType(updatedBoat.getType());
            existingBoat.setFromTime(updatedBoat.getFromTime());
            existingBoat.setToTime(updatedBoat.getToTime());
            repo.save(existingBoat);
            return "Boat updated successfully";
        } else {
            return "Boat not found";
        }
    }
    
    public String deleteBoat(int id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return "Boat deleted successfully";
        } else {
            return "Boat not found";
        }
    }
}
