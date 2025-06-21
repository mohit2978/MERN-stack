package com.mohit.foodappbackend;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@AllArgsConstructor
@Getter
@Setter
public class Cards {
    private String card;
    private List<MenuItem> menuItems;
}
