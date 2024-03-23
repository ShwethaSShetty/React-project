import { useState } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(0);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resInfo?.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card.card.title}
          data={category?.card?.card}
          showItems={index === showItems}
          setShowItems={(isShowItem) => {
            console.log(isShowItem);
            isShowItem ? setShowItems(null) : setShowItems(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {'Rs '+ (item.card.info?.price ? item.card.info?.price/100 : item.card.info?.defaultPrice/100)}</li>
        ))}
      </ul> */
