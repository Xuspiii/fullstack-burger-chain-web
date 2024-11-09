package com.xuspi.burgerxusping.repository;

import com.xuspi.burgerxusping.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long>{
}
