import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slicers/book";

export default configureStore({
  reducer: {
    book: booksReducer,
  },
});
