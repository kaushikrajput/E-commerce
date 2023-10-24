import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem:[]
  },
  reducers: {
    addItem(state, action) {
      state.cartItem = [...state.cartItem,action.payload];
    },
    removeItem: (state, action) => {},
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
