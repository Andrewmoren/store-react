import { RootState } from './../store';
import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";




export const fetchPizzas = createAsyncThunk <Pizza[],Record<string, string> >(
  "pizza/fetchPizzasStatus",
  async (params ) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://63452c19dcae733e8feb2bd7.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data ;
  }
);

type Pizza  = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number;
  types: number;
  rating: number;
}

interface PizzaSliceState {
  items: Pizza[] ;
  status: "loading" | "success" | "error";
}

const initialState: PizzaSliceState = {
  items: [],
  status: "loading", //loading | success | error
};

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
      state.status = "loading";
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    }),

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = "error";
      state.items = [];
    })
  }

  
  
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
