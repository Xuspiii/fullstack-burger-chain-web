package com.xuspi.burgerxusping.service;

import com.xuspi.burgerxusping.dto.OrderRequest;
import com.xuspi.burgerxusping.exception.OrderNotFoundException;
import com.xuspi.burgerxusping.exception.RestaurantNotFoundException;
import com.xuspi.burgerxusping.model.Order;
import com.xuspi.burgerxusping.model.Restaurant;
import com.xuspi.burgerxusping.repository.OrderRepository;
import com.xuspi.burgerxusping.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final RestaurantRepository restaurantRepository;

    public List<Order> getOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new OrderNotFoundException("Order not found"));
    }

    public Order createOrder(OrderRequest orderRequest) {
        Restaurant restaurant = restaurantRepository.findByZipCode(orderRequest.getRestaurantZipCode())
                .orElseThrow(() -> new RestaurantNotFoundException("Restaurant not found"));
        Order order = new Order();
        order.setDate(LocalDateTime.now());
        order.setTotal(orderRequest.getTotal());
        order.setRestaurant(restaurant);
        order.setProducts(orderRequest.getProducts());
        return orderRepository.save(order);
    }
}
