import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookCard } from ".";
import { BookProps, State } from "../types";

const BookList = () => {
  const books = useSelector((state: State) => state.book.book);

  return (
    <div className="flex flex-col gap-5 py-10">
      {books.map((book: BookProps) => (
        <BookCard
          id={book?.id}
          name={book?.name}
          description={book?.description}
          price={book?.price}
          category={book?.category}
        />
      ))}
    </div>
  );
};

export default BookList;
