package com.carservice.backend.repository;

import com.carservice.backend.model.ReservationModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepo extends JpaRepository<ReservationModel,Long> {
 List<ReservationModel> findByUsername(String username);

}
