import RestuarantCard from "./RestuarantCard.jsx";
import './Body.css';

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar"> Search bar</div>
            <div className="res">
               <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
                <div className="card"><RestuarantCard/></div>
            </div>
        </div>
    )
};

export default Body;