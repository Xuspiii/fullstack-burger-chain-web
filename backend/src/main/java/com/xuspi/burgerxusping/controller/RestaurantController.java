package com.xuspi.burgerxusping.controller;

import com.xuspi.burgerxusping.dto.RestaurantSummary;
import com.xuspi.burgerxusping.model.Order;
import com.xuspi.burgerxusping.model.Restaurant;
import com.xuspi.burgerxusping.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/restaurants")
public class RestaurantController {

    private final RestaurantService restaurantService;

    @GetMapping
    public ResponseEntity<List<Restaurant>> getRestaurants() {
        return ResponseEntity.ok(restaurantService.getRestaurants());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> getRestaurantById(@PathVariable Long id) {
        return ResponseEntity.ok(restaurantService.getRestaurantById(id));
    }

    @GetMapping("/zipCodes")
    public ResponseEntity<List<String>> getZipCodes() {
        return ResponseEntity.ok(restaurantService.getZipCodes());
    }

    @GetMapping("/zipCode/{zipCode}")
    public ResponseEntity<Restaurant> getRestaurantByZipCode(@PathVariable String zipCode) {
        return ResponseEntity.ok(restaurantService.getRestaurantByZipCode(zipCode));
    }

    @GetMapping("/summary/{zipCode}")
    public ResponseEntity<RestaurantSummary> getRestaurantSummaryByZipCode(@PathVariable String zipCode) {
        return ResponseEntity.ok(restaurantService.getRestaurantSummaryByZipCode(zipCode));
    }

    @GetMapping("/orders/{id}")
    public ResponseEntity<List<Order>> getOrdersByRestaurantId(@PathVariable Long id) {
        return ResponseEntity.ok(restaurantService.getOrdersByRestaurantId(id));
    }

    @PostMapping
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(restaurantService.createRestaurant(restaurant));
    }
}
