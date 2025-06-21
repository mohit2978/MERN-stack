import {LOGO_URL} from '../utils/constants.js'
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router";
import LanguageContext from "../utils/LanguageContext.js";
import UserContext from "../utils/UserContext.js";
import {useSelector} from "react-redux";
const Header = () => {

    const [buttonVal,setbuttonVal]=useState('Login');

    const [count,setCount]=useState(0);

    const cartItems = useSelector((store) => store.cart.items);

    useEffect(() => {
        setCount(count+1);
    }, [buttonVal]);

    const langContext=useContext(LanguageContext);
    const userContext=useContext(UserContext);
    const{user} = userContext;
    return (
        <div className=" flex h-[150px] w-full border  bg-red-50 fixed top-0 z-50">
            <div className="rounded-lg">
                <img className="w-60 h-[140px] object-contain" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex  place-content-between  w-450 py-5">
              <ul className="flex gap-10  justify-center text-xl p-[10px]">
                  <li >
                      <Link to={`/`}>Home</Link>
                  </li>
                  <li>
                      <Link to={`/about`}>AboutUs</Link>
                  </li>
                  <li>
                      <Link to={`/contact`}>Contact</Link>
                  </li>
                  <li>
                      <Link to={`/grocery`}>Grocery</Link>
                  </li>
                  <li className="px-4 font-bold text-xl">
                      <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                  </li>
              </ul>
                <ul className="flex gap-10  justify-end text-xl py-[10px]">
                    <li>{user}</li>
                    <li>Lang:{langContext}</li>
                </ul>
                <button className="inline-flex items-center px-4  m-8 border border-blue-300 text-xl font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-blue-300 focus:outline-neutral-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={()=>{
                            if (buttonVal ==="Login"){setbuttonVal("Logout")}
                            else setbuttonVal("Login");
                        }}>{buttonVal}</button>
            </div>
        </div>
    )
}

export default Header