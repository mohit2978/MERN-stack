import {useState} from "react";

const ResTaurantCategory=( props)=>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const {card, menuItems} = props.data;
    return <div className=" w-[900px]  border-b-2 border-gray-400 ">
        {/* Header*/}
        <div className="flex justify-between py-4 bg-red-50 shadow-lg rounded-lg mx-auto cursor-pointer" onClick={toggleAccordion}>
            <span className="text-xl font-bold ">{card} ({menuItems.length})</span>
            <span  >⬇️ </span>
        </div>
        {isOpen && menuItems.map((item, index) => (

            <div className="flex justify-between w-full m-auto" key={index} >
                <span className="text-lg">{item.name}</span>
                <span className="text-lg text-green-600">₹{item.price}</span>
            </div>
        ))}
    </div>
}

export default ResTaurantCategory;