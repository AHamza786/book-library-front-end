import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CrossIcon } from "../assets";
import { setIsModalOpen } from "../redux/slicers/modal";
import { State } from "../utils";

type CustomProps = {
  children: React.ReactNode;
};

const CustomModal = ({ children }: CustomProps) => {
  const { isModalOpen } = useSelector((state: State) => state.modal);
  const dispatch: any = useDispatch();
  
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
      {/* Light background overlay */}
      <div className="fixed inset-0 bg-gray-600 opacity-50" />

      {/* Modal content */}
      <div
        className={`bg-white mx-5 sm:mx-auto w-full max-w-[600px] rounded-lg shadow-2xl z-50 opacity-100 px-4 sm:px-8 relative pt-6 pb-4 sm:pb-8 flex flex-col`}
      >
        <img
          src={CrossIcon}
          className="h-6 w-6 cursor-pointer absolute top-4 right-4"
          onClick={() => dispatch(setIsModalOpen(!isModalOpen))}
        />
        <div className="bg-white rounded-lg flex  flex-col gap-4 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
