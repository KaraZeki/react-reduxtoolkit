import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cartItems: courseItems,
  quantity: 0,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.quantity = 0;
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id != action.payload
      );
    },

    listItem: (state) => {
      state.cartItems = courseItems;
      state.quantity = courseItems.length;
      state.total = 0;
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 0) {
          item.quantity--;
        }
      }
    },

    calculateTotal: (state) => {
      debugger;
      let total=0;
      let quantity=0;
      state.cartItems.forEach((item)=>{
        total+=item.quantity*item.price;
        quantity+=item.quantity;
      });
      state.quantity=quantity;
      state.total=total;
    },
  },
});

export const {
  clearCart,
  removeItem,
  listItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
