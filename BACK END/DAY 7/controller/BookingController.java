package com.example.boathouse.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boathouse.model.BookingDetails;
import com.example.boathouse.service.BookingService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("/book")
public class BookingController {
    @Autowired
    BookingService service;

    @PostMapping("/add")
    public String bookBoat(@RequestBody BookingDetails book) {
        return service.bookBoat(book);
    }
    @GetMapping("/get")
    public List<BookingDetails> getAll() {
        return service.getAllBooking();
    }
    
    @GetMapping("/getbyid/{userId}")
    public Optional<BookingDetails> getByUserId(@PathVariable int userId) {
        return service.getByUserId(userId);
    }
    @DeleteMapping("/delete/{bookingId}")
    public String deleteBooking(@PathVariable int bookingId) {
        return service.deleteBooking(bookingId);
    }
}
