import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: "https://images.unsplash.com/photo-1774025395295-6d5f23f272bd?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },
    {
      img: "https://images.unsplash.com/photo-1690192168579-0f79e522a270?q=80&w=1808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },

    {
      img: "https://images.unsplash.com/photo-1483213097419-365e22f0f258?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      name: "Signage",
      cost: 80,
      quantity: 0,
    },
  ],

  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
