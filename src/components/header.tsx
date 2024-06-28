import React from "react";
import CustomButton from "./customButton";

type HeaderProps = {
  onClick: () => void;
};

const Header = ({ onClick }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between pb-5 sm:pb-10">
      <h1 className="text-2xl sm:text-3xl tracking-wider font-bold subpixel-antialiased">
        Book Library
      </h1>
      <CustomButton
        text="Add Book"
        background="#5dbea3"
        hoverBg="hover:bg-[#33b249]"
        onClick={onClick}
      />
    </div>
  );
};

export default Header;
