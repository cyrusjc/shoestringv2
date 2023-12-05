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
      <div className="buttonGroup">
        <Button
          variant="secondary"
          className="menuButton"
          onClick={handleClick("/dinnerMenu.json", "Dinner")}
        >
          <p>Dinner</p>
        </Button>

        <Button variant="secondary" className="menuButton">
          <p>Lunch (tba)</p>
        </Button>

        <Button variant="secondary" className="menuButton">
          <p>Open Table (tba)</p>
        </Button>
      </div>

      <MenuPage filePath={filePath} timePeriod={timePeriod} />
    </div>
  );
}

export default Menu;
