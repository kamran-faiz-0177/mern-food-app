// src/redux/slices/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store item details
  itemCount: 0, // Total number of items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.itemCount += 1;
    },
    // Remove item from cart
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item._id === action.payload);
      if (index !== -1) {
        state.itemCount -= state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    // Clear the cart
    clearCart: (state) => {
      state.items = [];
      state.itemCount = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
