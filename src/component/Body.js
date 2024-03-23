import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listPfRestaurants, setListORestaurant] = useState([null]);
  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.959641&lng=77.717308&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListORestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const {loggedInUser, setUserName} = useContext(UserContext);

  if (onlineStatus === false)
    return (
      <h1>
        {" "}
        Looks like you are offline!! Please check your internet connections
      </h1>
    );

  return listPfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listPfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            search
          </button>
          <input type="text"
            className="border border-solid border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className="m-4 p-4 flex item-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {
                restaurant.info?.promoted ? <RestaurantCardPromoted resData={restaurant} />:  <RestaurantCard resData={restaurant} />
              }
             
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
