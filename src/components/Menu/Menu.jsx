import React from "react";

const Menu = ({}) => {
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
      <div className="menuBox">
        {showDinnerMenu && jsonData && jsonData.values && (
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
    </div>
  );
};

export default Menu;
