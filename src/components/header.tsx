import React from "react";
import CustomButton from "./customButton";
import { useSelector, useDispatch } from "react-redux";
import { setIsModalOpen } from "../redux/slicers/modal";
import { setBookData } from "../redux/slicers/book";
import { BookProps, State } from "../utils";

const Header = () => {
  const { isModalOpen } = useSelector((state: State) => state.modal);
  const books = useSelector((state: State) => state.book.book);
  const dispatch: any = useDispatch();

  return (
    <div className="flex items-center justify-between pb-5 sm:py-6 px-5 rounded-full shadow-md sticky top-3 sm:top-0 z-20 bg-white">
      <h1 className="text-2xl sm:text-3xl tracking-wider font-bold subpixel-antialiased">
        Book Library
      </h1>
      <div className="flex gap-4">
        {books.some((item: BookProps) => item?.isCheck === true) && (
          <CustomButton
            text="Delete Books"
            background="#D2122E"
            hoverBg="hover:bg-[#33b249]"
            onClick={() => {
              const updatedBooks: BookProps[] = books?.filter(
                (book: BookProps) => book?.isCheck !== true
              );
              dispatch(setBookData(updatedBooks));
            }}
          />
        )}
        <CustomButton
          text="Add Book"
          background="#5dbea3"
          hoverBg="hover:bg-[#33b249]"
          onClick={() => dispatch(setIsModalOpen(!isModalOpen))}
        />
      </div>
    </div>
  );
};

export default Header;
