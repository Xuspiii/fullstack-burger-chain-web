package com.xuspi.burgerxusping.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String zipCode;
    private String city;

    @OneToMany(mappedBy = "restaurant")
    private List<Order> orders;
}
