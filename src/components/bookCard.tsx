import React from "react";
import CustomButton from "./customButton";
import DeleteIcon from "../assets/deleteIcon.svg";
import { BookProps as BookTypes } from "../utils";

interface BooksProps extends BookTypes {
  onDelete: () => void;
  onBookSelect: () => void;
}

const BookCard = ({
  id,
  name,
  category,
  description,
  price,
  onDelete,
  onBookSelect
}: BooksProps) => {
  return (
    <div
      className="border px-5 py-2.5 shadow-md rounded-lg flex flex-col sm:flex-row gap-4 sm:items-center justify-between cursor-pointer sm:max-h-24 sm:h-36"
      key={id}
      onClick={onBookSelect}
    >
      <div className="flex flex-row justify-between flex-[2] sm:flex-[5] lg:flex-[2] items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg sm:text-2xl tracking-wider font-semibold subpixel-antialiased">
            {name}
          </h1>
          <p className="text-base sm:text-lg font-medium subpixel-antialiased sm:hidden"><span className="inline sm:hidden font-semibold">Price: </span> ${price}</p>
        </div>
        <CustomButton
          icon={DeleteIcon}
          className="block sm:hidden"
          onClick={onDelete}
        />
      </div>
      <div className="flex-[4] text-[#595959] text-lg font-medium">
      <span className="inline sm:hidden font-semibold">Category: </span> {category}
      </div>
      <p className="text-base sm:text-lg font-medium subpixel-antialiased hidden sm:block">${price}</p>
      <div className="flex-1 flex justify-end">
        <CustomButton
          icon={DeleteIcon}
          className="hidden sm:block"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default BookCard;
