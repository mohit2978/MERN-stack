import './RestuarantCard.css';

const RestuarantCard = () => {

    let styleCard={
        backgroundColor: "#f0f0f0"
    }
    return (
        <div className="res-card" style={styleCard}>
            <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2023/12/Tawa-Paneer-Masala-1.jpg" alt=""/>
            <h3>food</h3>
            <h4>Biryani,North-Indian,Asian</h4>
            <h4>4.3 Stars</h4>
            <h4>34 minutes</h4>
        </div>
    )
}

export default RestuarantCard;