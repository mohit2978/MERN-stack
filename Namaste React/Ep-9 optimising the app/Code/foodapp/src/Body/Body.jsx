import RestuarantCard from "./RestuarantCard.jsx";
import {useEffect, useState} from "react";
import './Body.css';
import Shimmer from "../Shimmer/Shimmer.jsx";


const Body = () => {

    let [resturants,setResturants]=useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {fetchdata()},[])

    const fetchdata = async()=> {
        const data=await fetch("http://localhost:8080/api/res");
        const json=await data.json()
        setResturants(json)
    }

    const searchdata = async(kw)=> {
        const data=await fetch(`http://localhost:8080/api/res/search?keyword=${kw}`);
        const json=await data.json()
        setResturants(json)
    }


    if(resturants.length==0){
        return <Shimmer/>
    }
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" className="search-box"       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}/>
                <button onClick={()=>searchdata(searchTerm)}>Search</button>
                <button onClick={()=>fetchdata()}>Reset</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    resturants=resturants.filter(
                        (resturant => resturant.stars>4.0)
                    )
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