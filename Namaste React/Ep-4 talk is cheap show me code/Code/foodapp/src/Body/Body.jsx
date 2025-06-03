import RestuarantCard from "./RestuarantCard.jsx";
import './Body.css';

let resturants=[
    {
        "name": "Spice Garden",
        "cuisines": ["Indian", "Tandoori"],
        "stars": 4.5,
        "ETA": 30
    },
    {
        "name": "Sushi Express",
        "cuisines": ["Japanese", "Sushi"],
        "stars": 4.2,
        "ETA": 25
    },
    {
        "name": "Bella Pasta",
        "cuisines": ["Italian", "Pasta", "Pizza"],
        "stars": 4.7,
        "ETA": 40
    },
    {
        "name": "Burger Hub",
        "cuisines": ["American", "Burgers"],
        "stars": 3.9,
        "ETA": 20
    },
    {
        "name": "Green Bowl",
        "cuisines": ["Healthy", "Salads"],
        "stars": 4.1,
        "ETA": 15
    },
    {
        "name": "Dragon Flame",
        "cuisines": ["Chinese", "Szechuan"],
        "stars": 4.4,
        "ETA": 35
    },
    {
        "name": "Taco Fiesta",
        "cuisines": ["Mexican", "Street Food"],
        "stars": 4.0,
        "ETA": 18
    },
    {
        "name": "The Vegan Bite",
        "cuisines": ["Vegan", "Gluten-Free"],
        "stars": 4.6,
        "ETA": 22
    },
    {
        "name": "Royal Biryani",
        "cuisines": ["Indian", "Biryani"],
        "stars": 4.3,
        "ETA": 28
    },
    {
        "name": "Kebab King",
        "cuisines": ["Middle Eastern", "Grill"],
        "stars": 4.2,
        "ETA": 32
    }
];

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar"> Search bar</div>
            <div className="res">
                {resturants.map((restaurant, index) => (
                    <div className="card" key={index}>
                        <RestuarantCard
                            name={restaurant.name}
                            cuisines={restaurant.cuisines}
                            stars={restaurant.stars}
                            ETA={restaurant.ETA}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Body;