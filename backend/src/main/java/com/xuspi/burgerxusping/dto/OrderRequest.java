package com.xuspi.burgerxusping.dto;

import com.xuspi.burgerxusping.model.Product;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class OrderRequest {
    private double total;
    private String restaurantZipCode;
    private List<Product> products;
}
