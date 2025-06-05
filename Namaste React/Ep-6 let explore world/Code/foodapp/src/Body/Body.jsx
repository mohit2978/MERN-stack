import RestuarantCard from "./RestuarantCard.jsx";
import {useState} from "react";
import {resturantList} from "../utils/data.jsx"
import './Body.css';



const Body = () => {

    let [resturants,setResturants]=useState(resturantList);

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