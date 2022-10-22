import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63452c19dcae733e8feb2bd7.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Error!");
        navigate("/");
      }
    }

    fetchPizza();
  }, [id]);

  if (!pizza) {
    return "Loading...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
