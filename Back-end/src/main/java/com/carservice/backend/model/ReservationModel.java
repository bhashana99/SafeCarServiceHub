package com.carservice.backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "reservations")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String date;

    @Column(nullable = false)
    private String time;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private String vehicleNo;

    @Column(nullable = false)
    private Integer mileage;

    @Column(nullable = false)
    private String message;

    @Column(nullable = false)
    private String username;

}
