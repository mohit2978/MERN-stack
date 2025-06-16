package com.mohit.foodappbackend;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/res")
@AllArgsConstructor
public class foodController {

    List<Restaurant> restaurantList;

    private final RestaurantService restaurantService;

    @GetMapping
    public List<Restaurant> getall() {
        if (restaurantList.isEmpty()) {
            restaurantList= restaurantService.getAllRestaurants();
        }

        return restaurantList;
    }


    @PostMapping("/create")
    public void create(@RequestBody Restaurant restaurant){
        restaurantList.add(restaurant);
    }

    @GetMapping("/search")
    public List<Restaurant> search(@RequestParam String keyword){
        List<Restaurant> filteredList = restaurantList.stream()
                .filter(restaurant -> restaurant.getName().toLowerCase().contains(keyword))
                .collect(Collectors.toCollection(ArrayList::new));
        return filteredList;
    }

    @GetMapping("/getMenu")
    public Restaurant getRetaurantByName( @RequestParam String name){
        System.out.println(name);
        return restaurantList.stream().filter(
                restaurant -> restaurant.getName().toLowerCase().contains(name.toLowerCase())
        ).findFirst().orElse(null);
    }
}
