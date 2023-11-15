import React, { useState, useEffect } from "react";

import MenuItems from "../../components/MenuItems/MenuItems";

function Menu() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching JSON file:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>Menu</h2>
      {jsonData && jsonData.values && (
        <ul>
          {jsonData.values
            .filter((item) => item.length > 0)
            .map((item, index) => (
              <li key={index}>
                <MenuItems
                  name={item[0]}
                  description={item[1]}
                  price={item[2]}
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Menu;
