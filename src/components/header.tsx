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
    <div className="flex items-center flex-col gap-2 sm:flex-row justify-between pb-5 sm:py-6 px-5 rounded-full shadow-2xl sticky top-3 sm:top-5 z-20 bg-white">
      <h1 className="text-2xl sm:text-3xl tracking-wider font-bold subpixel-antialiased">
        Book Library
      </h1>
      <div className="flex gap-4">
        {books.some((item: BookProps) => item?.isCheck === true) && (
          <CustomButton
          className="bg-secondary"
            text="Delete Books"
            onClick={() => {
              const updatedBooks: BookProps[] = books?.filter(
                (book: BookProps) => book?.isCheck !== true
              );
              dispatch(setBookData(updatedBooks));
            }}
          />
        )}
        <CustomButton
        className="bg-primary hover:bg-primary_green"
          text="Add Book"
          onClick={() => dispatch(setIsModalOpen(!isModalOpen))}
        />
      </div>
    </div>
  );
};

export default Header;
