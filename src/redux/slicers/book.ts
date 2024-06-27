import { createSlice } from "@reduxjs/toolkit";
import { BooksMockData } from "../../constant";
import { BookState } from "../../types";

const initialState: BookState = {
  book: BooksMockData,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    updateBookData(state, action) {
      return action.payload;
    },
    setInitailState() {
      return initialState;
    },
  },
});

export const { updateBookData, setInitailState } = bookSlice.actions;

export default bookSlice.reducer;
