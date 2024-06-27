import React from "react";
import CustomButton from "./customButton";
import DeleteIcon from "../assets/deleteIcon.svg";
import { BookProps } from "../types";

const BookCard = ( {id,name,category,description,price} : BookProps) => {
  return (
    <div
      className="border px-5 py-2.5 shadow-md rounded-lg flex flex-col sm:flex-row gap-4 sm:items-center justify-between cursor-pointer"
      key={id}
    >
      <div className="flex flex-row justify-between flex-[2] items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg sm:text-2xl tracking-wider font-semibold subpixel-antialiased">
            {name}
          </h1>
          <p className="text-base sm:text-lg font-medium subpixel-antialiased">${price}</p>
        </div>
        <CustomButton icon={DeleteIcon} className="block sm:hidden" />
      </div>
      <div className="flex-[4] text-[#595959] text-lg font-medium">
        {category}
      </div>
      <div className="flex-1 flex justify-end">
        <CustomButton icon={DeleteIcon} className="hidden sm:block" />
      </div>
    </div>
  );
};

export default BookCard;
