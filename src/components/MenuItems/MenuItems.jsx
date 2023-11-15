import React from "react";

import "./MenuItems.scss";

function MenuItems({ name, description, price }) {
  return (
    <>
      <div className="menuComp">
        <span className="menuItemPrice"> {price}</span>
        <span className="nameDesc">
          <div className="menuItemName">{name}</div>
          <div className="menuItemDesc">{description}</div>
        </span>
      </div>
    </>
  );
}

export default MenuItems;
