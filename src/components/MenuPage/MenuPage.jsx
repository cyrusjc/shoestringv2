import React, { useState, useEffect } from "react";
import MenuItems from "../MenuItems/MenuItems";

import "./MenuPage.scss";

const MenuPage = ({ filePath, timePeriod }) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching JSON file:", error);
      }
    };

    fetchData();
  }, [filePath]);

  return (
    <div className="">
      <h2>{timePeriod}</h2>
      {jsonData && jsonData.values && (
        <ul>
          {jsonData.values
            .filter((item) => item.length > 0)
            .map((item, index) => (
              <li key={index}>
                {item.length > 2 ? (
                  <MenuItems
                    name={item[0]}
                    description={item[1]}
                    price={item[2]}
                  />
                ) : (
                  <h5 className="menuCategory">{item[0]}</h5>
                )}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MenuPage;
