import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalprice: 0,
  items: [],
  isLoading: false,  // Ensure this is part of the initial state

};

const CartdSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    // addItem(state, action) {
    //   state.items.push(action.payload);
    //   state.totalprice = state.items.reduce((sum,obj)=>{
    //     return sum + obj.price
    //   },0)
    // },

    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalprice = state.items.reduce((sum, obj) => {
        return sum + (obj.price * obj.count)
      }, 0);
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--
      } 
      state.totalprice = state.items.reduce((sum, obj) => {
        return sum + (obj.price * obj.count)
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalprice = state.items.reduce((sum, obj) => {
        return sum + (obj.price * obj.count)
      }, 0);
    },
    
    clearItems(state, action) {
      state.items = [];
      state.totalprice = []
    },
  },
});

export const selectCard = (state)=> state.CartdSlice

export const { addItem, removeItem, clearItems,minusItem } = CartdSlice.actions;

export default CartdSlice.reducer;
