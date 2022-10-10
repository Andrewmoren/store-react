import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onCLickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onCLickCategory(0)}
          className={activeIndex === 0 ? "active" : ""}
        >
          Все
        </li>
        <li
          onClick={() => onCLickCategory(1)}
          className={activeIndex === 1 ? "active" : ""}
        >
          Мясные
        </li>
        <li
          onClick={() => onCLickCategory(2)}
          className={activeIndex === 2 ? "active" : ""}
        >
          Вегетарианская
        </li>
        <li
          onClick={() => onCLickCategory(3)}
          className={activeIndex === 3 ? "active" : ""}
        >
          Гриль
        </li>
        <li
          onClick={() => onCLickCategory(4)}
          className={activeIndex === 4 ? "active" : ""}
        >
          Острые
        </li>
        <li
          onClick={() => onCLickCategory(5)}
          className={activeIndex === 5 ? "active" : ""}
        >
          Закрытые
        </li>
      </ul>
    </div>
  );
};

export default Categories;
