import React from "react";

function MenuItems({ name, description, price }) {
  return (
    <>
      <div>
        <span className="menuItemName">{name}</span>
        <span className="menuItemDesc"> {description}</span>
        <span className="menuItemPrice"> {price}</span>
      </div>
    </>
  );
}

export default MenuItems;
