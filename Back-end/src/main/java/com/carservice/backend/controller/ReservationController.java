package com.carservice.backend.controller;

import com.carservice.backend.model.ReservationModel;
import com.carservice.backend.service.ReservationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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


}
