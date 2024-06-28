import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookCard } from ".";
import { setBookData, setSelectedBook } from "../redux/slicers/book";
import { setIsModalOpen } from "../redux/slicers/modal";
import { BookProps, State } from "../utils";

const BookList = () => {
  const { book: books } = useSelector((state: State) => state.book);
  const { isModalOpen } = useSelector((state: any) => state.modal);
  const dispatch: any = useDispatch();

  const onDeleteHandler = (item: BookProps) => {
    const updatedBooks = books?.filter(
      (book: BookProps) => book?.id !== item?.id
    );
    dispatch(setBookData(updatedBooks));
  };

  const bookSelectHandler = (item: BookProps) => {
    dispatch(setSelectedBook(item));
  };

  return (
    <div className="flex flex-col gap-5 py-10 z-10 bg-white">
      <div className="border px-5 py-2.5 shadow-md rounded-lg sm:flex flex-col sm:flex-row gap-4 sm:items-center justify-between  hidden bg-[#5dbea3]">
        <div className="flex flex-row justify-between flex-[2] items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg sm:text-2xl tracking-wider font-semibold subpixel-antialiased text-white">
              Name
            </h1>
          </div>
        </div>
        <div className="flex-1 lg:flex-[4] text-white text-lg font-medium">
          Category
        </div>
        <p className="text-base sm:text-lg font-medium subpixel-antialiased text-white flex-[1.5] flex justify-center lg:block">
          Price
        </p>
      </div>
      {books.map((book: BookProps) => (
        <BookCard
          id={book?.id}
          name={book?.name}
          description={book?.description}
          price={book?.price}
          category={book?.category}
          onDelete={() => onDeleteHandler(book)}
          onBookSelect={() => {
            dispatch(setIsModalOpen(!isModalOpen));
            bookSelectHandler(book);
          }}
        />
      ))}
    </div>
  );
};

export default BookList;
