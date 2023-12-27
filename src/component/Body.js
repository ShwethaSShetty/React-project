import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listPfRestaurants, setListORestaurant] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.959641&lng=77.717308&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListORestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (listPfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return listPfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button onClick={()=>{
            console.log()
               const filteredRestaurant = listPfRestaurants.filter(
                (res) => {
                  
                  console.log(res.info.name+" "+ searchText)
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                }
              );
              setFilteredRestaurants(filteredRestaurant);
          }}>search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listPfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
