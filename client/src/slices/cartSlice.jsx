import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: JSON.parse(localStorage.getItem("cart")) ?? [],
  },
  reducers: {
    addItem(state, action) {
      let find = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cartItem[find].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cartItem.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
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
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    incrementQuantity(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItem[itemIndex].quantity >= 1) {
        state.cartItem[itemIndex].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));

    },
    decrementQuantity(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id == action.payload.id
      );
      if (state.cartItem[itemIndex].quantity > 1) {
        state.cartItem[itemIndex].quantity -= 1;
      } else if (state.cartItem[itemIndex].quantity === 1) {
        const updateCart = state.cartItem.filter(
          (p) => p.id !== action.payload.id
        );
        state.cart = updateCart;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;


export default cartSlice.reducer;
