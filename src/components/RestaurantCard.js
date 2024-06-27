import { CDN } from "../utils/constants";

const RestauranCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData.info;
  return (
    <div className="res-card">
      <div className="res-img">
        <img
          className="res-image"
          src={CDN + cloudinaryImageId}
          alt="Restaurant Image"
        />
        <div className="res-title">
          <div className="title">{name}</div>
          <div className="rating">⭐ {avgRating} </div>
          <div className="cuisine">{cuisines.join(", ")}</div>
          <div className="location">📍{areaName}</div>
        </div>
      </div>
    </div>
  );
};

export default RestauranCards;
