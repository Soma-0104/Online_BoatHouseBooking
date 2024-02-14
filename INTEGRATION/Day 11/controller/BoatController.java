package com.example.boathouse.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.boathouse.model.BoatDetails;
import com.example.boathouse.service.BoatService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping("/boat")
public class BoatController {
    @Autowired
    BoatService service;
    @GetMapping("/get")
    public List<BoatDetails> getAllBoats() {
        return service.getAllBoats();
    }
    @PostMapping("/addboat")
    public String addBoat(@RequestBody BoatDetails boat) {
        return service.addBoat(boat);
    }
    @GetMapping("/getbyid/{id}")
    public Optional<BoatDetails> getById(@PathVariable int id) {
        return service.getById(id);
    }
    @GetMapping("/boatname/{name}")
    public Optional<BoatDetails> getByName(@PathVariable String name) {
        return service.getByName(name);
    }
    
    @GetMapping("/boattype/{type}")
    public Optional<BoatDetails> getByType(@PathVariable String type) {
        return service.getByType(type);
    }
    @PutMapping("/updateboat/{id}")
    public String updateBoat(@PathVariable int id, @RequestBody BoatDetails boat) {
        return service.updateBoat(id, boat);
    }
    @DeleteMapping("/deleteboat/{id}")
    public String deleteBoat(@PathVariable int id) {
        return service.deleteBoat(id);
    }
}
