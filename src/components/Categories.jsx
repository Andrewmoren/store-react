import React, { useState } from "react";

const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((cat, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
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
