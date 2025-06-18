const MenuItems=({name,price})=>{

    return (
        <div className="flex justify-between w-full m-auto" >
            <span className="text-lg">{name}</span>
            <span className="text-lg text-green-600">₹{price}</span>

        </div>
    )

}
export default MenuItems;