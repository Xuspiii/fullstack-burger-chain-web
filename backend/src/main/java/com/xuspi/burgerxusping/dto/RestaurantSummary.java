package com.xuspi.burgerxusping.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RestaurantSummary {
    private Long id;
    private String zipCode;
    private String city;
}
