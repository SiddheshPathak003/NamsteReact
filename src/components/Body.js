import { useEffect, useState } from "react";
import RestauranCards from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ResData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();

    setResData(
      result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return ResData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input className="search-box"></input>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filterData = ResData.filter(
            (rData) => rData.info.avgRating > 4.0
          );

          setResData(filterData);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="restaurant-container">
        {ResData.map((RData) => (
          <RestauranCards key={RData.info.id} resData={RData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
