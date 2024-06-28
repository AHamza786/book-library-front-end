import React from "react";
import CustomButton from "./customButton";
import { useSelector, useDispatch } from "react-redux";
import { setIsModalOpen } from "../redux/slicers/modal";
import { State } from "../utils";

const Header = () => {
  const { isModalOpen } = useSelector((state: State) => state.modal);
  const dispatch: any = useDispatch();

  return (
    <div className="flex items-center justify-between pb-5 sm:py-6 px-5 rounded-full shadow-md sticky top-3 sm:top-0 z-20 bg-white">
      <h1 className="text-2xl sm:text-3xl tracking-wider font-bold subpixel-antialiased">
        Book Library
      </h1>
      <CustomButton
        text="Add Book"
        background="#5dbea3"
        hoverBg="hover:bg-[#33b249]"
        onClick={() => dispatch(setIsModalOpen(!isModalOpen))}
      />
    </div>
  );
};

export default Header;
