// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push(action.payload)
      }
    },


    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    incrementQuantity: (state, action) => {
      const { catId, dishId } = action.payload;
      const selectedcategory = state.items[0].find(item => item.menu_category_id === catId);
      const selectedItem = selectedcategory.category_dishes.find(item => item.dish_id === dishId)
      if (selectedItem) {
        selectedItem.quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const { catId, dishId } = action.payload;
      const selectedcategory = state.items[0].find(item => item.menu_category_id === catId);
      const selectedItem = selectedcategory.category_dishes.find(item => item.dish_id === dishId)
      if (selectedItem && selectedItem.quantity > 0) {
        selectedItem.quantity--;
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
