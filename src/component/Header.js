import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = ()=>{
   const [btnNameReact, setBtnNameReact] = useState("Login");
   const onlineStatus = useOnlineStatus();
   const { loggedInUser } = useContext(UserContext);
    return (
      <div className = "flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img className="w-56" src={LOGO_URL} alt="Logo"/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4"><h5> Online Status: { onlineStatus ? "✅" : "🔴"} </h5></li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4">Cart</li>
            <button className="login" onClick={()=>{btnNameReact === "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login")}}>{btnNameReact}</button>
            <li className="px-4 font-semibold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }
  
export default Header;