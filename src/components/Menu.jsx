import { useState, useEffect } from "react";
import Submenu from "./Submenu";

const Menu = ({ mindMapData }) => {
  const [showSubMenuIndex, setShowSubMenuIndex] = useState([]);
  const [singleMap, setSingleMap] = useState(false);

  useEffect(() => {
    const isSingleMap = mindMapData.length === 1;
    setSingleMap(isSingleMap);
  }, [mindMapData]);

  const handleShowSubMenu = (index) => {
    setShowSubMenuIndex((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="menu-wrap py-4">
      <h1 className="text-center py-4 font-bold text-3xl text-gray-500">
        Mind Map
      </h1>
      <ul className="menu">
        {mindMapData.map((menuItem, index) => (
          <li key={index} className={singleMap ? "item single" : "item"}>
            <div className="content">
              <div
                className="details"
                onClick={() => handleShowSubMenu(index)}
                style={{ backgroundColor: menuItem.color }}
              >
                <span>{menuItem.text}</span>
              </div>
            </div>
            {showSubMenuIndex.includes(index) && (
              <Submenu
                menuItems={menuItem.subMenu ?? []}
                bgColor={menuItem.color}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
