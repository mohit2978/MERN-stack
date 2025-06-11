import React, {useState} from 'react';
import './RestaurantDetails.css';
import {useParams} from "react-router";
import useResturantMenu from "../utils/useResturantMenu.jsx";

const RestaurantDetails = () => {
    const { resName } = useParams();

    const restaurant = useResturantMenu(resName);
    if (!restaurant) return <div>No restaurant selected.</div>;



    return (
        <div className="restaurant-card">
            <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image" />
            <div className="restaurant-info">
                <h2 className="restaurant-name">{restaurant.name}</h2>
                <p className="restaurant-cuisines">
                    <strong>Cuisines:</strong> {restaurant.cuisines.join(', ')}
                </p>
                <p className="restaurant-rating">⭐ {restaurant.stars} stars</p>

                <h3 className="menu-heading">Menu</h3>
                <div className="menu-list">
                    {restaurant.menuItems?.map((item, index) => (
                        <div key={index} className="menu-item">
                            <span>{item.name}</span>
                            <span className="menu-price">₹{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;
