import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id); //look for existing item
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          //push is allowed redux handles mutation challenges internally
          id: newItem.id, //new item
          price: newItem,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++; //if item is existing
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFormCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id); //how many items exists
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id); //if only 1 items to be removed
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price; //price update
      }
    },
  },
});

export const cartActions = cartSlice.actions; //enables dispatch of actions
export default cartSlice;
