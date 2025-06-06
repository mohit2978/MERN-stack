package com.mohit.foodappbackend;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/res")
public class foodController {

    List<Restaurant> restaurantList = new ArrayList<>();
    @GetMapping
    public List<Restaurant> getall(){
        if(restaurantList.isEmpty()){
            restaurantList.add(new Restaurant("Spice Garden", Arrays.asList("Indian", "Tandoori"), 4.5, 30, "https://content.jdmagicbox.com/v2/comp/delhi/v6/011pxx11.xx11.230205060526.n9v6/catalogue/the-spice-garden-delhi-restaurants-ptcucdn9ri-250.jpg"));
            restaurantList.add(new Restaurant("Sushi Express", Arrays.asList("Japanese", "Sushi"), 4.2, 25, "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e2/87/56/img-20180929-180819-largejpg.jpg?w=900&h=500&s=1"));
            restaurantList.add(new Restaurant("Bella Pasta", Arrays.asList("Italian", "Pasta", "Pizza"), 4.7, 40, "https://www.bellapasta.com.sg/cdn/shop/files/66B81750-D477-4343-A545-054D669ACC88_1_201_a_1500x.jpg?v=1661917543"));
            restaurantList.add(new Restaurant("Burger Hub", Arrays.asList("American", "Burgers"), 3.9, 20, "https://static.wixstatic.com/media/9a1d3f_98137e3ad55a455c866d8b5bbd444988~mv2.png/v1/fill/w_440,h_196,al_c,lg_1,q_85,enc_avif,quality_auto/Burger%20Hub%20Logo%20_%20Located%20at%206231%20S%2027th%20St%20Greenfield%2C%20WI%2053221%20_edited.png"));
            restaurantList.add(new Restaurant("Green Bowl", Arrays.asList("Healthy", "Salads"), 4.1, 15, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUvHy4mw_hWd-Hj2Pl9Lz1f9bpYc-V638lg&s"));
            restaurantList.add(new Restaurant("Dragon Flame", Arrays.asList("Chinese", "Szechuan"), 4.4, 35, "https://static.vecteezy.com/system/resources/thumbnails/036/155/219/small_2x/dragon-on-white-vector.jpg"));
            restaurantList.add(new Restaurant("Taco Fiesta", Arrays.asList("Mexican", "Street Food"), 4.0, 18, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0yMgADaXm9WF17MJ4avt2jBH0lSYgPhUeA&s"));
            restaurantList.add(new Restaurant("The Vegan Bite", Arrays.asList("Vegan", "Gluten-Free"), 4.6, 22, "https://m.media-amazon.com/images/I/61dWR4yIIVL._AC_UF1000,1000_QL80_.jpg"));
            restaurantList.add(new Restaurant("Royal Biryani", Arrays.asList("Indian", "Biryani"), 4.3, 28, "https://i.ndtvimg.com/i/2017-08/biryani_620x350_51503923984.jpg"));
            restaurantList.add(new Restaurant("Kebab King", Arrays.asList("Middle Eastern", "Grill"), 4.2, 32, "https://i.ytimg.com/vi/PBasbMRf4X0/maxresdefault.jpg"));

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
}
