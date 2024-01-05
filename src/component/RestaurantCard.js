import { CDN_URL } from "../utils/constant";
const styleCard = {
    backgroundColor: "#f0f0f0",
  };
const RestaurantCard = (prop)=>{
    const {resData} = prop;
    console.log(resData?.info)
    const {cloudinaryImageId, name,avgRating, cuisines, costForTwo, sla } = resData?.info;
    return (
      <div className="restaurant-card" style={styleCard}>
        <img className="res-logo"  alt="es-logo" src={CDN_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString} </h4>
      </div>
    )
  }
  
  export default RestaurantCard;