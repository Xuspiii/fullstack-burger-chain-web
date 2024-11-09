package com.xuspi.burgerxusping.repository;

import com.xuspi.burgerxusping.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    Optional<Restaurant> findByZipCode(String zipCode);

    @Query("SELECT r.zipCode FROM Restaurant r")
    List<String> findAllZipCodes();
}
