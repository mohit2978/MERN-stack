import './Header.css';
import {LOGO_URL} from '../utils/constants.js'
const Header = () => {
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
              </ul>
            </div>
        </div>
    )
}

export default Header