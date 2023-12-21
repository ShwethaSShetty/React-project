import { CDN_URL } from "../utils/constant";
const styleCard = {
    backgroundColor: "#f0f0f0",
  };
const RestaurantCard = (prop)=>{
    const {resData} = prop;
    const {cloudinaryImageId, name,avgRating, cuisines, costForTwo, deliveryTime } = resData?.info;
    return (
      <div className="restaurant-card" style={styleCard}>
        <img className="res-logo"  alt="es-logo" src={CDN_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join("")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>${costForTwo/100} FOR TWO</h4>
        <h4>${deliveryTime} minutes</h4>
      </div>
    )
  }
  
  export default RestaurantCard;