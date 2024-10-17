package com.carservice.backend.controller;

import com.carservice.backend.model.ReservationModel;

import com.carservice.backend.service.ReservationService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping("/create-reservation")
    public ReservationModel createReservation(@RequestBody ReservationModel reservationModel){
        return  reservationService.createReservation(reservationModel);
    }

    @GetMapping("/get-all-reservations/{username}")
    public List<ReservationModel> getUserReservations(@PathVariable String username){
        return  reservationService.getUserReservations(username);
    }

    @DeleteMapping("/delete-reservation/{id}")
    public void deleteReservation(@PathVariable Long id){
        reservationService.deleteReservation(id);
    }



}
