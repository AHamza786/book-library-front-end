import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookCard } from ".";
import { setBookData, setSelectedBook } from "../redux/slicers/book";
import { setIsModalOpen } from "../redux/slicers/modal";
import { BookProps, State } from "../utils";

const BookList = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const { book: books } = useSelector((state: State) => state.book);
  const { isModalOpen } = useSelector((state: any) => state.modal);
  const dispatch: any = useDispatch();

  const onDeleteHandler = (item: BookProps) => {
    const updatedBooks: BookProps[] = books?.filter(
      (book: BookProps) => book?.id !== item?.id
    );
    dispatch(setBookData(updatedBooks));
  };

  const bookSelectHandler = (item: BookProps) => {
    dispatch(setSelectedBook(item));
  };

  const handleFormatChange = (event: any) => {
    if (event?.target?.value === "ascending") {
      const updatedBooks: BookProps[] = books
        ?.slice()
        ?.sort(
          (book1: BookProps, book2: BookProps) => book1.price - book2.price
        );
      dispatch(setBookData(updatedBooks));
    } else {
      const updatedBooks: BookProps[] = books
        ?.slice()
        ?.sort(
          (book1: BookProps, book2: BookProps) => book2.price - book1.price
        );
      dispatch(setBookData(updatedBooks));
    }
    setSelectedOption(event.target.value);
  };

  return (
    <>
      {books?.length > 0 ? (
        <div className="flex flex-col gap-5 py-10 z-10 bg-white">
          <select
            name="csvFiles"
            id="csvFiles"
            value={selectedOption}
            onChange={handleFormatChange}
            className="rounded-lg w-full sm:max-w-xs border border-[#5dbea3] solid outline-none py-3 px-2 self-end"
          >
            <option value="" className="subpixel-antialiased" disabled selected>
              {"Sort by"}
            </option>
            <option value="ascending" id="ascending">
              Price:Lowest To Highest
            </option>
            <option value="descending" id="descending">
              Price:Highest To Lower
            </option>
          </select>
          <div className="border px-5 py-2.5 shadow-md rounded-lg sm:flex flex-col sm:flex-row gap-4 sm:items-center justify-between pl-[54px]  hidden bg-[#5dbea3]">
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
              isCheck={book?.isCheck}
              onCheckBoxClick={() => {
                const updatedItem: BookProps[] = books?.map(
                  (item: BookProps) => {
                    if (item?.id === book?.id) {
                      return {
                        ...item,
                        isCheck: !item?.isCheck,
                      };
                    }
                    return item;
                  }
                );
                dispatch(setBookData(updatedItem));
              }}
            />
          ))}
        </div>
      ) : (
        <div className="h-full flex flex-col gap-3 justify-center items-center ">
          <h1 className="font-bold text-2xl sm:text-5xl text-center">No Book Available!</h1>
          <p className="font-medium text-[#595959] opacity-80 text-base sm:text-2xl text-center">Please press <strong className="text-[#33b249] font-medium">Add Book</strong> button at top right corner to add books</p>
        </div>
      )}
    </>
  );
};

export default BookList;
