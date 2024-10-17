package com.carservice.backend.service;

import com.carservice.backend.model.ReservationModel;
import com.carservice.backend.repository.ReservationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepo reservationRepo;

    public ReservationModel createReservation(ReservationModel reservationModel){
        return reservationRepo.save(reservationModel);
    }

    public List<ReservationModel> getUserReservations(String username){
        return  reservationRepo.findByUsername(username);
    }

    public void deleteReservation(Long id){
        reservationRepo.deleteById(id);
    }


}
