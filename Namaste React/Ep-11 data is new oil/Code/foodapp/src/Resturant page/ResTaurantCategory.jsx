const ResTaurantCategory=( props)=>{

    const {card, menuItems} = props.data;
    console.log(menuItems);
    console.log(card)
    return <div className=" w-[900px]">
        {/* Header*/}
        <div className="flex justify-between py-4 bg-red-50 shadow-lg rounded-lg mx-auto" >
            <span className="text-xl font-bold ">{card} ({menuItems.length})</span>
            <span>⬇️ </span>
        </div>
        {menuItems.map((item, index) => (
            <div className="flex justify-between w-full m-auto" key={index} >
                <span className="text-lg">{item.name}</span>
                <span className="text-lg text-green-600">₹{item.price}</span>
            </div>
        ))}
    </div>
}

export default ResTaurantCategory;