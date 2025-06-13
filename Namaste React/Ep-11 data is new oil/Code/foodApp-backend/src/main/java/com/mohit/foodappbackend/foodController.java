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
    public List<Restaurant> getall() {
        if (restaurantList.isEmpty()) {

            restaurantList.add(new Restaurant(
                    "Spice Garden",true,
                    Arrays.asList("Indian", "Tandoori"),
                    4.5,
                    30,
                    "https://content.jdmagicbox.com/v2/comp/delhi/v6/011pxx11.xx11.230205060526.n9v6/catalogue/the-spice-garden-delhi-restaurants-ptcucdn9ri-250.jpg",
                    Arrays.asList(
                            new MenuItem("Butter Chicken", 350.0),
                            new MenuItem("Tandoori Roti", 40.0),
                            new MenuItem("Paneer Tikka", 280.0),
                            new MenuItem("Chicken Tikka", 320.0),
                            new MenuItem("Dal Makhani", 240.0),
                            new MenuItem("Jeera Rice", 180.0),
                            new MenuItem("Lassi", 120.0),
                            new MenuItem("Gulab Jamun", 100.0),
                            new MenuItem("Naan", 50.0),
                            new MenuItem("Mixed Veg Curry", 260.0)
                    )
            ));

            restaurantList.add(new Restaurant(
                    "Sushi Express",false,
                    Arrays.asList("Japanese", "Sushi"),
                    4.2,
                    25,
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e2/87/56/img-20180929-180819-largejpg.jpg?w=900&h=500&s=1",
                    Arrays.asList(
                            new MenuItem("California Roll", 450.0),
                            new MenuItem("Tuna Sashimi", 500.0),
                            new MenuItem("Miso Soup", 150.0),
                            new MenuItem("Salmon Nigiri", 480.0),
                            new MenuItem("Dragon Roll", 520.0),
                            new MenuItem("Tempura Udon", 400.0),
                            new MenuItem("Edamame", 200.0),
                            new MenuItem("Spicy Tuna Roll", 460.0),
                            new MenuItem("Green Tea Ice Cream", 180.0),
                            new MenuItem("Matcha Latte", 220.0)
                    )
            ));

            restaurantList.add(new Restaurant(
                    "Bella Pasta",false,
                    Arrays.asList("Italian", "Pasta", "Pizza"),
                    4.7,
                    40,
                    "https://www.bellapasta.com.sg/cdn/shop/files/66B81750-D477-4343-A545-054D669ACC88_1_201_a_1500x.jpg?v=1661917543",
                    Arrays.asList(
                            new MenuItem("Margherita Pizza", 450.0),
                            new MenuItem("Penne Arrabiata", 400.0),
                            new MenuItem("Fettuccine Alfredo", 420.0),
                            new MenuItem("Bruschetta", 250.0),
                            new MenuItem("Caesar Salad", 300.0),
                            new MenuItem("Tiramisu", 350.0),
                            new MenuItem("Minestrone Soup", 280.0),
                            new MenuItem("Lasagna", 480.0),
                            new MenuItem("Garlic Bread", 150.0),
                            new MenuItem("Caprese Salad", 320.0)
                    )
            ));

            restaurantList.add(new Restaurant(
                    "Burger Hub",false,
                    Arrays.asList("American", "Burgers"),
                    3.9,
                    20,
                    "https://static.wixstatic.com/media/9a1d3f_98137e3ad55a455c866d8b5bbd444988~mv2.png/v1/fill/w_440,h_196,al_c,lg_1,q_85,enc_avif,quality_auto/Burger%20Hub%20Logo%20_%20Located%20at%206231%20S%2027th%20St%20Greenfield%2C%20WI%2053221%20_edited.png",
                    Arrays.asList(
                            new MenuItem("Cheeseburger", 220.0),
                            new MenuItem("Fries", 120.0),
                            new MenuItem("Coke", 80.0),
                            new MenuItem("Veggie Burger", 210.0),
                            new MenuItem("Chicken Burger", 230.0),
                            new MenuItem("Onion Rings", 150.0),
                            new MenuItem("Milkshake", 200.0),
                            new MenuItem("Double Patty Burger", 300.0),
                            new MenuItem("Grilled Chicken Wrap", 250.0),
                            new MenuItem("Ice Cream Sundae", 180.0)
                    )
            ));

            restaurantList.add(new Restaurant(
                    "Green Bowl",false,
                    Arrays.asList("Healthy", "Salads"),
                    4.1,
                    15,
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUvHy4mw_hWd-Hj2Pl9Lz1f9bpYc-V638lg&s",
                    Arrays.asList(
                            new MenuItem("Quinoa Salad", 300.0),
                            new MenuItem("Avocado Toast", 280.0),
                            new MenuItem("Grilled Veggie Wrap", 320.0),
                            new MenuItem("Kale Caesar", 350.0),
                            new MenuItem("Smoothie Bowl", 400.0),
                            new MenuItem("Tofu Stir Fry", 360.0),
                            new MenuItem("Beetroot Hummus", 220.0),
                            new MenuItem("Chickpea Salad", 300.0),
                            new MenuItem("Fruit Salad", 250.0),
                            new MenuItem("Green Detox Juice", 180.0)
                    )
            ));

            restaurantList.add(new Restaurant(
                    "Dragon Flame",false,
                    Arrays.asList("Chinese", "Szechuan"),
                    4.4,
                    35,
                    "https://static.vecteezy.com/system/resources/thumbnails/036/155/219/small_2x/dragon-on-white-vector.jpg",
                    Arrays.asList(
                            new MenuItem("Kung Pao Chicken", 400.0),
                            new MenuItem("Hot and Sour Soup", 220.0),
                            new MenuItem("Szechuan Noodles", 350.0),
                            new MenuItem("Mapo Tofu", 300.0),
                            new MenuItem("Fried Rice", 280.0),
                            new MenuItem("Spring Rolls", 200.0),
                            new MenuItem("Chili Paneer", 340.0),
                            new MenuItem("Chicken Manchurian", 380.0),
                            new MenuItem("Dim Sum", 420.0),
                            new MenuItem("Lychee Ice Cream", 200.0)
                    )
            ));

            restaurantList.add(new Restaurant(
                    "Taco Fiesta",true,
                    Arrays.asList("Mexican", "Street Food"),
                    4.0,
                    18,
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0yMgADaXm9WF17MJ4avt2jBH0lSYgPhUeA&s",
                    Arrays.asList(
                            new MenuItem("Chicken Tacos", 320.0),
                            new MenuItem("Beef Tacos", 350.0),
                            new MenuItem("Fish Tacos", 340.0),
                            new MenuItem("Veggie Tacos", 300.0),
                            new MenuItem("Nachos", 280.0),
                            new MenuItem("Guacamole", 220.0),
                            new MenuItem("Burrito", 400.0),
                            new MenuItem("Churros", 200.0),
                            new MenuItem("Quesadilla", 360.0),
                            new MenuItem("Mexican Rice", 250.0)
                    )
            ));

            restaurantList.add(new Restaurant(
                    "The Vegan Bite",true,
                    Arrays.asList("Vegan", "Gluten-Free"),
                    4.6,
                    22,
                    "https://m.media-amazon.com/images/I/61dWR4yIIVL._AC_UF1000,1000_QL80_.jpg",
                    Arrays.asList(
                            new MenuItem("Vegan Burger", 350.0),
                            new MenuItem("Tofu Scramble", 320.0),
                            new MenuItem("Vegan Pizza", 400.0),
                            new MenuItem("Gluten-Free Pasta", 420.0),
                            new MenuItem("Avocado Salad", 300.0),
                            new MenuItem("Smoothie", 250.0),
                            new MenuItem("Chia Pudding", 200.0),
                            new MenuItem("Jackfruit Tacos", 370.0),
                            new MenuItem("Vegan Brownie", 180.0),
                            new MenuItem("Kombucha", 220.0)
                    )
            ));

            restaurantList.add(new Restaurant(
                    "Royal Biryani",false,
                    Arrays.asList("Indian", "Biryani"),
                    4.3,
                    28,
                    "https://i.ndtvimg.com/i/2017-08/biryani_620x350_51503923984.jpg",
                    Arrays.asList(
                            new MenuItem("Chicken Biryani", 400.0),
                            new MenuItem("Mutton Biryani", 450.0),
                            new MenuItem("Veg Biryani", 350.0),
                            new MenuItem("Egg Biryani", 380.0),
                            new MenuItem("Raita", 100.0),
                            new MenuItem("Salad", 120.0),
                            new MenuItem("Gulab Jamun", 150.0),
                            new MenuItem("Paneer Biryani", 400.0),
                            new MenuItem("Hyderabadi Biryani", 480.0),
                            new MenuItem("Soft Drink", 80.0)
                    )
            ));

            restaurantList.add(new Restaurant(
                    "Kebab King",false,
                    Arrays.asList("Middle Eastern", "Grill"),
                    4.2,
                    32,
                    "https://i.ytimg.com/vi/PBasbMRf4X0/maxresdefault.jpg",
                    Arrays.asList(
                            new MenuItem("Chicken Shawarma", 320.0),
                            new MenuItem("Lamb Kebab", 450.0),
                            new MenuItem("Falafel Wrap", 300.0),
                            new MenuItem("Hummus with Pita", 220.0),
                            new MenuItem("Tabbouleh", 250.0),
                            new MenuItem("Grilled Veggies", 280.0),
                            new MenuItem("Baklava", 200.0),
                            new MenuItem("Mint Lemonade", 180.0),
                            new MenuItem("Beef Kofta", 400.0),
                            new MenuItem("Stuffed Grape Leaves", 240.0)
                    )
            ));


            restaurantList.add(new Restaurant(
                    "Chickenette",false,
                    Arrays.asList("Non-veg", "Chicken"),
                    4.8,
                    15,
                    "https://www.allrecipes.com/thmb/8L5gq8V7Kyl3qfoDe5vhCU_rvZI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-141169-Easy-Indian-Butter-Chicken-DDMFS-4x3-beauty-588ff54d1e0f4a0788906e851e27d540.jpg",
                    Arrays.asList(
                            new MenuItem("Chicken Shawarma", 320.0),
                            new MenuItem("Lamb Kebab", 450.0),
                            new MenuItem("Butter chicken", 300.0),
                            new MenuItem("Kadhai chicken", 220.0),
                            new MenuItem("Chilli chicken", 250.0),
                            new MenuItem("Afgani chicken", 280.0),
                            new MenuItem("Chicken Tikka", 200.0),
                            new MenuItem("Chicken Malai Tikka", 180.0),
                            new MenuItem("Chicken Roll", 400.0),
                            new MenuItem("Stuffed Grape Leaves Chicken", 240.0)
                    )
            ));
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
