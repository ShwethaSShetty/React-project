import { useEffect, useState } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RES_INFO_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {'Rs '+ (item.card.info?.price ? item.card.info?.price/100 : item.card.info?.defaultPrice/100)}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
