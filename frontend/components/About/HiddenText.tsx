import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface HiddenTextProps {
  heading: string;
  children: any;
}

const HiddenText: React.FC<HiddenTextProps> = ({ heading, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mt-6 md:mt-8 lg:mt-10 bg-white border-2 border-blue-800 shadow-md rounded-lg py-2 px-4 md:py-4 md:px-6 transition-all ease-in-out duration-200'>
      <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        <div className='flex flex-row justify-between items-center text-blue-800'>
          <h3 className='text-base lg:text-lg font-semibold'>{heading}</h3>
          <IoMdArrowDropdown
            className={`text-2xl lg:text-3xl ${
              isOpen ? "rotate-180" : ""
            } transition-all duration-150 ease-in-out`}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? `mt-2 md:mt-3 lg:mt-5 max-h-[2000px]` : "max-h-0"
        } transition-all duration-200 ease-in-out`}
      >
        {React.cloneElement(children, {
          className: `${
            isOpen ? "max-h-[2000px]" : "max-h-0"
          } transition-all duration-100 ease-in-out overflow-hidden`,
        })}
      </div>
    </div>
  );
};

export default HiddenText;
