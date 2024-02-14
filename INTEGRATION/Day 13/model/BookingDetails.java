package com.example.boathouse.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "BookingDetails")
public class BookingDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int bookingId;
    int userId;
    String image;
    String boatName;
    int boatId;
    String name;
    String email;
    String mobileNumber;
    String proof;
    String food;
    String acRoom;
    Date checkIn;
    Date checkOut;
}
