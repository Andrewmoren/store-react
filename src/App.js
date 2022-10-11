import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";

import "./scss/app.scss";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://63452c19dcae733e8feb2bd7.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                // title={obj.title}
                // price={obj.price}
                // imageUrl={obj.imageUrl}
                // sizes={obj.sizes}
                // types={obj.types}
                {...obj}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
