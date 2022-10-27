import { RootState } from './../store';
import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Sort } from './filterSlice';

type Pizza  = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number;
  types: number;
  rating: number;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error"
}

interface PizzaSliceState {
  items: Pizza[] ;
  status: Status
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING //loading | success | error
};

export type SearchPizzaParams = {
  order: string; sortBy: string; category: string; search: string; currentPage: string;
}

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

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING
      state.items = [];
    });
   /* eslint-disable */
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS
    }),

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = [];
    })
  }

  
  
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
