import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems(showItems);
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⌄</span>
      </div>
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
