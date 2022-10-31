import axios from "axios";
import {  createAsyncThunk } from "@reduxjs/toolkit";
import { Pizza, SearchPizzaParams } from "./types";



export const fetchPizzas = createAsyncThunk <Pizza[],SearchPizzaParams>(
    "pizza/fetchPizzasStatus",
    async (params ) => {
      const { order, sortBy, category, search, currentPage } = params;
      const { data } = await axios.get<Pizza[]>(
        `https://63452c19dcae733e8feb2bd7.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
  
      return data ;
    }
  );