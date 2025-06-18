import {useState} from "react";
import MenuItems from "./MenuItems.jsx";

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
            <span>{isOpen ? "🔼" : "⬇️"}</span>
        </div>
        {isOpen && menuItems.map((item, index) => (
            <div key={index} >
               <MenuItems name={item.name} price={item.price} />
            </div>
        ))}
    </div>
}

export default ResTaurantCategory;