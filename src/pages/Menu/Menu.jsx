import React, { useState, useEffect } from "react";

import { Button, Container } from "react-bootstrap";

import "./Menu.scss";
import MenuPage from "../../components/MenuPage/MenuPage";

function Menu() {
  const [filePath, setFilePath] = useState("/dinnerMenu.json");
  const [timePeriod, setTimePeriod] = useState("Dinner");

  const handleClick = (path, period) => () => {
    setFilePath(path);
    setTimePeriod(period);
  };

  return (
    <div className="divCenter menu">
      <div className="menuBox">
        <div className="buttonGroup">
          <Button
            variant="secondary"
            className={`menuButton ${timePeriod === "Dinner" ? "active" : ""}`}
            onClick={handleClick("/dinnerMenu.json", "Dinner")}
          >
            <p>Dinner</p>
          </Button>

          <Button
            variant="secondary"
            className={`menuButton ${timePeriod === "Lunch" ? "active" : ""}`}
            onClick={handleClick("/lunchMenu.json", "Lunch")}
          >
            <p>Lunch </p>
          </Button>

          <Button
            variant="secondary"
            className={`menuButton ${
              timePeriod === "OpenTable" ? "active" : ""
            }`}
            onClick={handleClick("/opentableMenu.json", "Opentable 2024")}
          >
            <p>Open Table</p>
          </Button>
        </div>

        <MenuPage filePath={filePath} timePeriod={timePeriod} />
      </div>
    </div>
  );
}

export default Menu;
