import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {},
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
