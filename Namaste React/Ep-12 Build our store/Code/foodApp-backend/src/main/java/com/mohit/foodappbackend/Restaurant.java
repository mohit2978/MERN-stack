package com.mohit.foodappbackend;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class Restaurant {
    private String name;
    private boolean promoted;
    private List<String> cuisines;
    private double stars;
    private int ETA;
    private String imageUrl;
    private List<Cards> cards;

}
