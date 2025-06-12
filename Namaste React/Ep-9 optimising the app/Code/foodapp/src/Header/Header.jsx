import './Header.css';
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
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div className="navItems">
              <ul>
                  <li>
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