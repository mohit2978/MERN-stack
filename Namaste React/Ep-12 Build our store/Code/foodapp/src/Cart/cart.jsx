import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import MenuItems from "../Resturant page/MenuItems.jsx";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button
                    className=" p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems?.length === 0 && (
                    <h1> Cart is empty. Add Items to the cart!</h1>
                )}

                {cartItems?.length !== 0  && cartItems.map((item, index) => (
                    <div key={index} >
                        <MenuItems name={item.name} price={item.price} />
                    </div>
                ))}

                <hr className="my-4 border-t-2 border-gray-300" />

                {cartItems.length > 0 && (
                    <h2 className="text-xl font-bold mt-4">
                        Total Price: ₹{totalPrice}
                    </h2>
                )}

            </div>
        </div>
    );
};

export default Cart;