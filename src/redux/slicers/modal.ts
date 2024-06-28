import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../../utils";

const initialState: ModalState = {
  isModalOpen: false,
};

const ModalSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setIsModalOpen(state, action) {
      state.isModalOpen = action.payload;
    },
    setInitailState() {
      return initialState;
    },
  },
});

export const { setIsModalOpen, setInitailState } = ModalSlice.actions;

export default ModalSlice.reducer;
