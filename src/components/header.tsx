import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between pb-5 sm:pb-10">
      <h1 className="text-2xl sm:text-3xl">Book Library</h1>
      <button className="text-xs sm:text-sm border-none box-border text-white cursor-pointer inline-block font-sans font-medium h-10 leading-5 list-none m-0 outline-none py-2.5 px-4 rounded-lg bg-[#5dbea3] hover:bg-[#33b249]" role="button">
        Add Book
      </button>
    </div>
  );
};

export default Header;
