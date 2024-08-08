import React from "react";
import "./ExploreMenu.css";
import { shoe_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Shoe Brands</h1>
      <p className="explore-menu-text">
        Choose from a diverse selection of shoes featuring top brands. Our
        mission is to provide you with the best quality footwear to elevate your
        style and comfort.
      </p>
      <div className="explore-menu-list">
        {shoe_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.brand_name ? "All" : item.brand_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.brand_name ? "active" : ""}
                src={item.brand_image}
                alt=""
              />
              <p>{item.brand_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
