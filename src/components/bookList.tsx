import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookCard } from ".";
import { BookProps, State } from "../types";
import { setBookData, setSelectedBook } from "../redux/slicers/book";

type BookListProps = {
  onClick: () => void;
};

const BookList = ({ onClick }: BookListProps) => {
  const books = useSelector((state: State) => state.book.book);
  const selectedBook = useSelector((state: State) => state.book.selectedBook);
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
    <div className="flex flex-col gap-5 py-10">
      {books?.map((book: BookProps) => (
        <BookCard
          id={book?.id}
          name={book?.name}
          description={book?.description}
          price={book?.price}
          category={book?.category}
          onDelete={() => onDeleteHandler(book)}
          onBookSelect={() => {
            onClick();
            bookSelectHandler(book);
          }}
        />
      ))}
    </div>
  );
};

export default BookList;
