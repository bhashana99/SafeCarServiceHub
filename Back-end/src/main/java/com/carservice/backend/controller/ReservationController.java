package com.carservice.backend.controller;

import com.carservice.backend.model.ReservationModel;
import com.carservice.backend.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    public ReservationModel createReservation(@RequestBody ReservationModel reservationModel){
        return  reservationService.createReservation(reservationModel);
    }

}
