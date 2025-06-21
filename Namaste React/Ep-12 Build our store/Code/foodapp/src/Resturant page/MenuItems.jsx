import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice.js";

const MenuItems=({name,price})=>{

    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItem({name : name,price : price}));
    };

    return (
        <div className="flex items-center w-full my-4 px-4" >
            <span className="flex-1 text-lg">{name}</span>
            <span className="flex-1 text-lg text-green-600 my-4 text-center">₹{price}</span>
            <button
                className="p-2 mx-16 my-4 rounded-lg bg-red-300 text-white shadow-lg cursor-pointer"
                onClick={() => handleAddItem()} >
                    Add +
            </button>
        </div>
    )

}
export default MenuItems;