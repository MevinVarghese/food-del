import React, { useContext } from "react";
import "./ShoeItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const ShoeItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="shoe-item">
      <div className="shoe-item-img-container">
        <img
          className="shoe-item-image"
          src={url + "/images/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="shoe-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="shoe-item-info">
        <div className="shoe-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="shoe-item-desc">{description}</p>
        <p className="shoe-item-price">${price}</p>
      </div>
    </div>
  );
};

export default ShoeItem;
