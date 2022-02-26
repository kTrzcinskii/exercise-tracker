import { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface HiddenTextProps {
  heading: string;
}

const HiddenText: React.FC<HiddenTextProps> = ({ heading, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timesUp, setTimesUp] = useState(false);
  const childHeightRef = useRef<HTMLDivElement>(null);

  const [childHeight, setChildHeight] = useState(0);

  useEffect(() => {
    if (childHeightRef.current?.clientHeight) {
      setChildHeight(childHeightRef.current?.clientHeight);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      const myTimeout = setTimeout(() => {
        setTimesUp(true);
      }, 200);
      return () => clearTimeout(myTimeout);
    }
    if (!isOpen) {
      setTimesUp(false);
    }
  }, [isOpen]);

  return (
    <div className='mt-6 md:mt-8 lg:mt-10 bg-white border-2 border-blue-800 shadow-md rounded-lg py-2 px-4 md:py-4 md:px-6'>
      <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        <div className='flex flex-row justify-between items-center text-blue-800'>
          <h3 className='text-base lg:text-lg font-semibold'>{heading}</h3>
          <IoMdArrowDropdown
            className={`text-2xl lg:text-3xl ${
              isOpen ? "rotate-180" : ""
            } transition-all duration-100 ease-in-out`}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? `mt-2 md:mt-3 lg:mt-5 h-[${childHeight}px]` : "h-0"
        } transition-all duration-300 ease-in-out`}
      >
        <div
          ref={childHeightRef}
          className={`${
            isOpen && timesUp ? "transition-all duration-100" : "invisible "
          } `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HiddenText;
