package com.xuspi.burgerxusping.repository;

import com.xuspi.burgerxusping.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
