import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = ()=>{
   let btnName = "Login";   const [btnNameReact, setBtnNameReact] = useState("Login")
    return (
      <div className = "header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Logo"/>
        </div>
        <div className="nav-item">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="contact">Contact Us</Link>
            <li>Cart</li>
            <button className="login" onClick={()=>{btnNameReact === "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login")}}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    )
  }
  
export default Header;