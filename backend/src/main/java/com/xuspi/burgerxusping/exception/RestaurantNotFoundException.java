package com.xuspi.burgerxusping.exception;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class RestaurantNotFoundException extends RuntimeException {
    private final String message;
}
