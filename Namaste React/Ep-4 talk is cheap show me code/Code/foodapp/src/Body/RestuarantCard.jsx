import './RestuarantCard.css';

const RestuarantCard = ({ name, cuisines, stars, ETA } ) => {

    let styleCard={
        backgroundColor: "#f0f0f0"
    }
    return (
        <div className="res-card" style={styleCard}>
            <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2023/12/Tawa-Paneer-Masala-1.jpg" alt=""/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{stars} Stars</h4>
            <h4>{ETA} minutes</h4>
        </div>
    )
}

export default RestuarantCard;