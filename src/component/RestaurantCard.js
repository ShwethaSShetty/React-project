import { CDN_URL } from "../utils/constant";
const styleCard = {
    backgroundColor: "#f0f0f0",
  };
const RestaurantCard = (prop)=>{
    const {resData} = prop;
    console.log(resData?.info)
    const {cloudinaryImageId, name,avgRating, cuisines, costForTwo, sla } = resData?.info;
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img className="rounded-lg"  alt="es-logo" src={CDN_URL+cloudinaryImageId}></img>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString} </h4>
      </div>
    )
  }

  export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }
  
  export default RestaurantCard;