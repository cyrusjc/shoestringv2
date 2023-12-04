import React, { useState, useEffect } from "react";

import { Button, Container } from "react-bootstrap";

import "./Menu.scss";
import MenuPage from "../../components/MenuPage/MenuPage";

function Menu() {
  const [filePath, setFilePath] = useState("");

  return (
    <div className="divCenter menu">
      <Button
        variant="secondary"
        className="menuButton"
        onClick={() => setFilePath("/dinnerMenu.json")}
      >
        {" "}
        <p>Dinner Menu</p>
      </Button>

      <Button variant="secondary" className="menuButton">
        {" "}
        <p>Lunch Menu</p>
      </Button>

      <MenuPage filePath={filePath} />
    </div>
  );
}

export default Menu;
