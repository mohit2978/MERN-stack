import {LOGO_URL} from '../utils/constants.js'
import {useEffect, useState} from "react";
import {Link} from "react-router";
const Header = () => {

    const [buttonVal,setbuttonVal]=useState('Login');

    const [count,setCount]=useState(0);

    useEffect(() => {
        console.log("useffect called");
        setCount(count+1);
        console.log(count);
    }, [buttonVal]);

    return (
        <div className=" flex h-[150px] border  bg-red-50 fixed top-0 z-50">
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
                  <li>Cart</li>
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