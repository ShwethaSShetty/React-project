import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{
   const [btnNameReact, setBtnNameReact] = useState("Login");
   const onlineStatus = useOnlineStatus();
    return (
      <div className = "header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Logo"/>
        </div>
        <div className="nav-item">
          <ul>
            <h5> Online Status: { onlineStatus ? "✅" : "🔴"} </h5>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="contact">Contact Us</Link>
            <Link to="/grocery">Grocery</Link>
            <li>Cart</li>
            <button className="login" onClick={()=>{btnNameReact === "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login")}}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    )
  }
  
export default Header;