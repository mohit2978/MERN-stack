import React, {useState} from 'react';
import './RestaurantDetails.css';
import {useParams} from "react-router";
import useResturantMenu from "../utils/useResturantMenu.jsx";
import ResTaurantCategory from "./ResTaurantCategory.jsx";

const RestaurantDetails = () => {
    const { resName } = useParams();
    const [showIndex, setshowIndex] = useState(-1);
    const restaurant = useResturantMenu(resName);
    if (!restaurant) return <div>No restaurant selected.</div>;



    return (
        <div className="restaurant-card">
            <img className="w-full h-[600px] object-cover rounded-2xl" src={restaurant.imageUrl} alt={restaurant.name} />
            <div className="restaurant-info">
                <h2 className="restaurant-name">{restaurant.name}</h2>
                <p className="restaurant-cuisines">
                    <strong>Cuisines:</strong> {restaurant.cuisines.join(', ')}
                </p>
                <p className="restaurant-rating">⭐ {restaurant.stars} stars</p>

                <h3 className="menu-heading">Menu</h3>


                <div >
                    {restaurant.cards?.map((item, index) => (
                        <div key={index} className="flex space-between">
                            <div><ResTaurantCategory data={item}
                                                     isOpen={index===showIndex && true }
                                                     setIndex={()=>setshowIndex((prev) => (prev === index ? null : index))}
                            /></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;
