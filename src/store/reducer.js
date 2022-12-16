import { createSlice } from "@reduxjs/toolkit";
const intialState = {
  categories: [],
  transaction: [],
};
export const expanseSlice = createSlice({
  name: "expense",
  intialState,
  reducers: {
    getTransactions: (state) => {
        // getTransactions code
    },
  },
});

export const { getTransactions } = expanseSlice.actions;
export default expanseSlice.reducer;
