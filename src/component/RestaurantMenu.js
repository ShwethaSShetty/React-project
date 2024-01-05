import { useEffect, useState } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RES_INFO_URL } from "../utils/constant";

const RestaurantMenu = () => {

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    console.log(RES_INFO_URL + resId);
    const data = await fetch(RES_INFO_URL + resId);
    const json = await data.json();
    setResInfo(json);
  };

  if (resInfo === null) return <Shimmer />;
  console.log(resInfo)

  const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {'Rs'+ item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
