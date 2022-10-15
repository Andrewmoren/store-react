import React, { useState } from "react";

const Categories = ({ value, onCLickCategory }) => {
  // const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  // const onCLickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((cat, i) => (
          <li
            key={i}
            onClick={() => onCLickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
