
import MenuItems from "./MenuItems.jsx";

const ResTaurantCategory=( props)=>{

    const {card, menuItems} = props.data;
    const isOpen = props.isOpen;
    const setShowIndex=props.setIndex;

    const handleClick=()=>{
        setShowIndex();
    }

    return <div className=" w-[900px]  border-b-2 border-gray-400 ">
        {/* Header*/}
        <div className="flex justify-between py-4 bg-red-50 shadow-lg rounded-lg mx-auto cursor-pointer"
             onClick={handleClick}>
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