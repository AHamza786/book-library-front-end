import { createSlice } from "@reduxjs/toolkit";
import { BooksMockData } from "../../constant";
import { BookState } from "../../types";

const initialState: BookState = {
  book: BooksMockData,
  selectedBook: {
    name: "",
    price: 0,
    category: "",
    description: "",
  },
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBookData(state, action) {
      return {
        book: action.payload,
      };
    },
    setSelectedBook(state, action) {
      return {
        ...state,
        selectedBook: action.payload,
      };
    },
    setInitailState() {
      return initialState;
    },
  },
});

export const { setBookData, setSelectedBook, setInitailState } = bookSlice.actions;

export default bookSlice.reducer;
