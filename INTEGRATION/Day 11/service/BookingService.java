package com.example.boathouse.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boathouse.model.BookingDetails;
import com.example.boathouse.repository.BookingRepo;

@Service
public class BookingService {
    @Autowired
    BookingRepo repo;
    public String bookBoat(BookingDetails book){
        repo.save(book);
        return "Booking Successful!!";
    }

    public List<BookingDetails> getAllBooking(){
        return repo.findAll();
    }
    public Optional<BookingDetails> getByUserId(int userId) {
        return repo.findByUserId(userId);
    }
    
    public String deleteBooking(int bookingId) {
        if (repo.existsById(bookingId)) {
            repo.deleteById(bookingId);
            return "Booking deleted successfully";
        } else {
            return "Booking not found";
        }
    }
}
