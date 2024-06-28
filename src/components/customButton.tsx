import React from "react";

type CustomButtonProps = {
  text?: string;
  background?: string;
  hoverBg?: string;
  icon?: any;
  onClick: () => void;
  className?: string;
};

const CustomButton = ({
  text,
  background,
  hoverBg,
  icon,
  onClick,
  className,
}: CustomButtonProps) => {
  return (
    <button
      className={`text-xs sm:text-sm border-none box-border text-white cursor-pointer inline-block font-sans font-medium h-10 leading-5 list-none m-0 outline-none py-2.5 px-4 rounded-lg ${hoverBg} ${className}`}
      role="button"
      style={{ backgroundColor: background }}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      {icon && <img className="h-6 w-6" src={icon} />}
      {text && text}
    </button>
  );
};

export default CustomButton;
