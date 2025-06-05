import RestuarantCard from "./RestuarantCard.jsx";
import {useState, UseState} from "react";
import './Body.css';

export let resturants = [
    {
        name: "Spice Garden",
        cuisines: ["Indian", "Tandoori"],
        stars: 4.5,
        ETA: 30,
        imageUrl: "https://content.jdmagicbox.com/v2/comp/delhi/v6/011pxx11.xx11.230205060526.n9v6/catalogue/the-spice-garden-delhi-restaurants-ptcucdn9ri-250.jpg"
    },
    {
        name: "Sushi Express",
        cuisines: ["Japanese", "Sushi"],
        stars: 4.2,
        ETA: 25,
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e2/87/56/img-20180929-180819-largejpg.jpg?w=900&h=500&s=1"
    },
    {
        name: "Bella Pasta",
        cuisines: ["Italian", "Pasta", "Pizza"],
        stars: 4.7,
        ETA: 40,
        imageUrl: "https://www.bellapasta.com.sg/cdn/shop/files/66B81750-D477-4343-A545-054D669ACC88_1_201_a_1500x.jpg?v=1661917543"
    },
    {
        name: "Burger Hub",
        cuisines: ["American", "Burgers"],
        stars: 3.9,
        ETA: 20,
        imageUrl: "https://static.wixstatic.com/media/9a1d3f_98137e3ad55a455c866d8b5bbd444988~mv2.png/v1/fill/w_440,h_196,al_c,lg_1,q_85,enc_avif,quality_auto/Burger%20Hub%20Logo%20_%20Located%20at%206231%20S%2027th%20St%20Greenfield%2C%20WI%2053221%20_edited.png"
    },
    {
        name: "Green Bowl",
        cuisines: ["Healthy", "Salads"],
        stars: 4.1,
        ETA: 15,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUvHy4mw_hWd-Hj2Pl9Lz1f9bpYc-V638lg&s"
    },
    {
        name: "Dragon Flame",
        cuisines: ["Chinese", "Szechuan"],
        stars: 4.4,
        ETA: 35,
        imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/036/155/219/small_2x/dragon-on-white-vector.jpg"
    },
    {
        name: "Taco Fiesta",
        cuisines: ["Mexican", "Street Food"],
        stars: 4.0,
        ETA: 18,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0yMgADaXm9WF17MJ4avt2jBH0lSYgPhUeA&s"
    },
    {
        name: "The Vegan Bite",
        cuisines: ["Vegan", "Gluten-Free"],
        stars: 4.6,
        ETA: 22,
        imageUrl: "https://m.media-amazon.com/images/I/61dWR4yIIVL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        name: "Royal Biryani",
        cuisines: ["Indian", "Biryani"],
        stars: 4.3,
        ETA: 28,
        imageUrl: "https://i.ndtvimg.com/i/2017-08/biryani_620x350_51503923984.jpg"
    },
    {
        name: "Kebab King",
        cuisines: ["Middle Eastern", "Grill"],
        stars: 4.2,
        ETA: 32,
        imageUrl: "https://i.ytimg.com/vi/PBasbMRf4X0/maxresdefault.jpg"
    }
];


const Body = () => {

    let [resturants,setResturants]=useState([
        {
            name: "Spice Garden",
            cuisines: ["Indian", "Tandoori"],
            stars: 4.5,
            ETA: 30,
            imageUrl: "https://content.jdmagicbox.com/v2/comp/delhi/v6/011pxx11.xx11.230205060526.n9v6/catalogue/the-spice-garden-delhi-restaurants-ptcucdn9ri-250.jpg"
        },
        {
            name: "Sushi Express",
            cuisines: ["Japanese", "Sushi"],
            stars: 4.2,
            ETA: 25,
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e2/87/56/img-20180929-180819-largejpg.jpg?w=900&h=500&s=1"
        },
        {
            name: "Bella Pasta",
            cuisines: ["Italian", "Pasta", "Pizza"],
            stars: 4.7,
            ETA: 40,
            imageUrl: "https://www.bellapasta.com.sg/cdn/shop/files/66B81750-D477-4343-A545-054D669ACC88_1_201_a_1500x.jpg?v=1661917543"
        },
        {
            name: "Burger Hub",
            cuisines: ["American", "Burgers"],
            stars: 3.9,
            ETA: 20,
            imageUrl: "https://static.wixstatic.com/media/9a1d3f_98137e3ad55a455c866d8b5bbd444988~mv2.png/v1/fill/w_440,h_196,al_c,lg_1,q_85,enc_avif,quality_auto/Burger%20Hub%20Logo%20_%20Located%20at%206231%20S%2027th%20St%20Greenfield%2C%20WI%2053221%20_edited.png"
        },
        {
            name: "Green Bowl",
            cuisines: ["Healthy", "Salads"],
            stars: 4.1,
            ETA: 15,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUvHy4mw_hWd-Hj2Pl9Lz1f9bpYc-V638lg&s"
        },
        {
            name: "Dragon Flame",
            cuisines: ["Chinese", "Szechuan"],
            stars: 4.4,
            ETA: 35,
            imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/036/155/219/small_2x/dragon-on-white-vector.jpg"
        },
        {
            name: "Taco Fiesta",
            cuisines: ["Mexican", "Street Food"],
            stars: 4.0,
            ETA: 18,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0yMgADaXm9WF17MJ4avt2jBH0lSYgPhUeA&s"
        },
        {
            name: "The Vegan Bite",
            cuisines: ["Vegan", "Gluten-Free"],
            stars: 4.6,
            ETA: 22,
            imageUrl: "https://m.media-amazon.com/images/I/61dWR4yIIVL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            name: "Royal Biryani",
            cuisines: ["Indian", "Biryani"],
            stars: 4.3,
            ETA: 28,
            imageUrl: "https://i.ndtvimg.com/i/2017-08/biryani_620x350_51503923984.jpg"
        },
        {
            name: "Kebab King",
            cuisines: ["Middle Eastern", "Grill"],
            stars: 4.2,
            ETA: 32,
            imageUrl: "https://i.ytimg.com/vi/PBasbMRf4X0/maxresdefault.jpg"
        }
    ]);

    return (
        <div className="body">
            <div className="search-bar"> Search bar</div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    resturants=resturants.filter(
                        (resturant => resturant.stars>4.0)
                    )
                    console.log(resturants);
                    setResturants(resturants);
                }}>
                Top Rated Resturant</button>
            </div>
            <div className="res">
                {resturants.map((restaurant, index) => (
                    <div className="card" key={index}>
                        <RestuarantCard
                            data={restaurant}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Body;