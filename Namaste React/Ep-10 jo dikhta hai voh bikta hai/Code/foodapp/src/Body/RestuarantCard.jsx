import './RestuarantCard.css';
import {Link} from "react-router";

const RestuarantCard = (props ) => {

    if (!props || !props.data) {
        return null; // or a fallback UI
    }
    const { name, cuisines, stars, eta ,imageUrl}=props.data;

    return (
        <div className=" w-50 h-90 p-5 bg-red-300 hover:bg-red-200 rounded-lg hover:cursor-pointer hover:border-gray-800">
            <img className='w-full h-[60%]' src={imageUrl} alt=""/>
            <h3><Link
                to={`restuarants/${name}`}>
                {name}</Link></h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{stars} Stars</h4>
            <h4>{eta} minutes</h4>
        </div>
    )
}

export default RestuarantCard;