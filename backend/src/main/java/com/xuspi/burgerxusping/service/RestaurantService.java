package com.xuspi.burgerxusping.service;

import com.xuspi.burgerxusping.dto.RestaurantSummary;
import com.xuspi.burgerxusping.exception.RestaurantNotFoundException;
import com.xuspi.burgerxusping.model.Order;
import com.xuspi.burgerxusping.model.Restaurant;
import com.xuspi.burgerxusping.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;

    public List<Restaurant> getRestaurants() {
        return restaurantRepository.findAll();
    }

    public Restaurant getRestaurantById(Long id) {
        return restaurantRepository.findById(id)
                .orElseThrow(() -> new RestaurantNotFoundException("Restaurant not found"));
    }

    public Restaurant getRestaurantByZipCode(String zipCode) {
        return restaurantRepository.findByZipCode(zipCode)
                .orElseThrow(() -> new RestaurantNotFoundException("Restaurant not found"));
    }

    public Restaurant createRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    public List<Order> getOrdersByRestaurantId(Long id) {
        return restaurantRepository.findById(id)
                .orElseThrow(() -> new RestaurantNotFoundException("Restaurant not found"))
                .getOrders();
    }

    public List<String> getZipCodes() {
        return restaurantRepository.findAllZipCodes();
    }

    public RestaurantSummary getRestaurantSummaryByZipCode(String zipCode) {
        Restaurant restaurant = restaurantRepository.findByZipCode(zipCode)
                .orElseThrow(() -> new RestaurantNotFoundException("Restaurant not found"));
        return new RestaurantSummary(
                restaurant.getId(),
                restaurant.getZipCode(),
                restaurant.getCity()
        );
    }
}
