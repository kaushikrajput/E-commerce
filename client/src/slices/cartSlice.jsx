import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addItem(state, action) {
      state.cartItem = [...state.cartItem, action.payload];
    },
    removeItem(state, action) {
      const index = state.cartItem.findIndex(
        (item) => item.id !== action.payload.id
      );
      let newItem = [...state.cartItem];

      if (index >= 0) {
        newItem.splice(index, 1);
      } else {
        console.warn(
          `cant remove (id:${action.payload.id}) as its not in basket`
        );
      }
      state.cartItem = newItem;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const selectTotal = (state) => {
  state.cart.cartItem.reduce((total, item) => total + item.price , 0);
};

export default cartSlice.reducer;
