import React, { useState, useEffect } from "react";
import MenuItems from "../MenuItems/MenuItems";

const MenuPage = ({ filePath }) => {
  console.log({ filePath });
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
    <div className="menuBox">
      {jsonData && jsonData.values && (
        <ul>
          {jsonData.values
            .filter((item) => item.length > 0)
            .map((item, index) => (
              <li key={index}>
                {item[1] ? (
                  <MenuItems
                    name={item[0]}
                    description={item[1]}
                    price={item[2]}
                  />
                ) : (
                  <h3 className="menuCategory">{item[0]}</h3>
                )}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MenuPage;
