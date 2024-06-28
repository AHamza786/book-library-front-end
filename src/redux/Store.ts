import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slicers/book";
import modalReducer from "./slicers/modal";

export default configureStore({
  reducer: {
    book: booksReducer,
    modal: modalReducer,
  },
});
