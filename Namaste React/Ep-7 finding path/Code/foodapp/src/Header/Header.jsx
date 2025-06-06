import './Header.css';
import {LOGO_URL} from '../utils/constants.js'
import {useEffect, useState} from "react";
const Header = () => {

    const [buttonVal,setbuttonVal]=useState('Login');

    const [count,setCount]=useState(0);

    useEffect(() => {
        console.log("useffect called");
        setCount(count+1);
        console.log(count);
    }, [buttonVal]);

    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div className="navItems">
              <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Cart</li>
                  <button onClick={()=>{
                      if (buttonVal == "Login"){setbuttonVal("Logout")}
                      else setbuttonVal("Login");
                  }}>{buttonVal}</button>
              </ul>
            </div>
        </div>
    )
}

export default Header