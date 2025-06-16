package com.mohit.foodappbackend;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class RestaurantService {
    List<Restaurant> restaurantList = new ArrayList<>();
    public List<Restaurant> getAllRestaurants() {

        restaurantList.add(new Restaurant(
                "Spice Garden",true,
                Arrays.asList("Indian", "Tandoori"),
                4.5,
                30,
                "https://content.jdmagicbox.com/v2/comp/delhi/v6/011pxx11.xx11.230205060526.n9v6/catalogue/the-spice-garden-delhi-restaurants-ptcucdn9ri-250.jpg",
                new ArrayList<>()
        ));

        restaurantList.add(new Restaurant(
                "Sushi Express",false,
                Arrays.asList("Japanese", "Sushi"),
                4.2,
                25,
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e2/87/56/img-20180929-180819-largejpg.jpg?w=900&h=500&s=1",
                new ArrayList<>()
        ));

        restaurantList.add(new Restaurant(
                "Bella Pasta",false,
                Arrays.asList("Italian", "Pasta", "Pizza"),
                4.7,
                40,
                "https://www.bellapasta.com.sg/cdn/shop/files/66B81750-D477-4343-A545-054D669ACC88_1_201_a_1500x.jpg?v=1661917543",
                new ArrayList<>()
        ));

        restaurantList.add(new Restaurant(
                "Burger Hub",false,
                Arrays.asList("American", "Burgers"),
                3.9,
                20,
                "https://static.wixstatic.com/media/9a1d3f_98137e3ad55a455c866d8b5bbd444988~mv2.png/v1/fill/w_440,h_196,al_c,lg_1,q_85,enc_avif,quality_auto/Burger%20Hub%20Logo%20_%20Located%20at%206231%20S%2027th%20St%20Greenfield%2C%20WI%2053221%20_edited.png",
                new ArrayList<>()
        ));

        restaurantList.add(new Restaurant(
                "Green Bowl",false,
                Arrays.asList("Healthy", "Salads"),
                4.1,
                15,
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUvHy4mw_hWd-Hj2Pl9Lz1f9bpYc-V638lg&s",
                new ArrayList<>()
        ));

        restaurantList.add(new Restaurant(
                "Dragon Flame",false,
                Arrays.asList("Chinese", "Szechuan"),
                4.4,
                35,
                "https://static.vecteezy.com/system/resources/thumbnails/036/155/219/small_2x/dragon-on-white-vector.jpg",
                new ArrayList<>()
        ));

        restaurantList.add(new Restaurant(
                "Taco Fiesta",true,
                Arrays.asList("Mexican", "Street Food"),
                4.0,
                18,
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0yMgADaXm9WF17MJ4avt2jBH0lSYgPhUeA&s",
                new ArrayList<>()
        ));

        restaurantList.add(new Restaurant(
                "The Vegan Bite",true,
                Arrays.asList("Vegan", "Gluten-Free"),
                4.6,
                22,
                "https://m.media-amazon.com/images/I/61dWR4yIIVL._AC_UF1000,1000_QL80_.jpg",
                new ArrayList<>()
        ));

        restaurantList.add(new Restaurant(
                "Royal Biryani",false,
                Arrays.asList("Indian", "Biryani"),
                4.3,
                28,
                "https://i.ndtvimg.com/i/2017-08/biryani_620x350_51503923984.jpg",
                new ArrayList<>()
        ));

        restaurantList.add(new Restaurant(
                "Kebab King",false,
                Arrays.asList("Middle Eastern", "Grill"),
                4.2,
                32,
                "https://i.ytimg.com/vi/PBasbMRf4X0/maxresdefault.jpg",
                new ArrayList<>()
        ));


        restaurantList.add(new Restaurant(
                "Chickenette",false,
                Arrays.asList("Non-veg", "Chicken"),
                4.8,
                15,
                "https://www.allrecipes.com/thmb/8L5gq8V7Kyl3qfoDe5vhCU_rvZI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-141169-Easy-Indian-Butter-Chicken-DDMFS-4x3-beauty-588ff54d1e0f4a0788906e851e27d540.jpg",
                new ArrayList<>()
        ));

        addCards();
        return restaurantList;
    }

    private void addCards() {

        for(Restaurant restaurant : restaurantList) {
            restaurant.getCards().add(new Cards("Most Recommended",   Arrays.asList(
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
            )));

            restaurant.getCards().add(new Cards("Non-veg",   					                    Arrays.asList(
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

            restaurant.getCards().add(new Cards("Newly Added", 					                    Arrays.asList(
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
            )));

            restaurant.getCards().add(new Cards("Must Try",					      Arrays.asList(
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
            )));
        }
    }

}
