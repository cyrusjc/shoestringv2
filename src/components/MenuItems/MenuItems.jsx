import React from "react";

import "./MenuItems.scss";

function MenuItems({ name, description, price }) {
  return (
    <>
      <div className="menuComp">
        <span className="nameDesc">
          <div className="menuItemName">
            <p> {name}</p>
          </div>
          <div className="menuItemDesc">
            <p>{description} </p>
          </div>
        </span>
        <span className="menuItemPrice">
          <p>{price} </p>
        </span>
      </div>
    </>
  );
}

export default MenuItems;
