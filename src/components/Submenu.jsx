import { useState, useEffect } from "react";
import PhaseDetails from "./PhaseDetails";

const Submenu = ({ menuItems, bgColor }) => {
  const [singleSubMenu, setSingleSubMenu] = useState(false);
  const [singleItem, setSingleItem] = useState(false);
  const [showSubItemsIndex, setShowSubItemsIndex] = useState([]);
  const [showSubPhaseIndex, setShowSubPhaseIndex] = useState(-1);

  const handleShowSubItemsIndex = (index) => {
    showSubItemsIndex.includes(index)
      ? setShowSubItemsIndex((prev) => {
          return prev.filter((item) => item !== index);
        })
      : setShowSubItemsIndex((prev) => {
          return [...prev, index];
        });
  };
  const handleShowSubPhaseIndex = (index) => {
    setTimeout(()=>{
      showSubPhaseIndex === index
      ? setShowSubPhaseIndex(-1)
      : setShowSubPhaseIndex(index);
    }, 1000)
  };
  const handleShowSubPhaseLeave = () => {
    setShowSubPhaseIndex(-1);
  };

  useEffect(() => {
    const isSingleSubMenu = menuItems.length === 1;
    setSingleSubMenu(isSingleSubMenu);
    const isSingleItem =
      menuItems.length === 1 && menuItems[0].subMenu === null;
    setSingleItem(isSingleItem);
  }, [menuItems]);

  return (
    <ul className="menu sub-menu">
      {menuItems.map((item, index) => (
        <li key={index} className={singleItem ? "item single" : "item"}>
          <div className="content">
            <div
              className="details"
              style={{ backgroundColor: bgColor }}
              onClick={() => handleShowSubItemsIndex(index)}
              onMouseEnter={() => handleShowSubPhaseIndex(index)}
              onMouseLeave={() => handleShowSubPhaseLeave()}
            >
              <span>{item.text}</span>
              {showSubPhaseIndex === index && item.data && (
                <div className="phase-data">
                  <PhaseDetails phaseData={item.data} />
                </div>
              )}
            </div>
          </div>
          {showSubItemsIndex.includes(index) && item.subMenu && (
            <Submenu menuItems={item.subMenu} bgColor={bgColor} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Submenu;
