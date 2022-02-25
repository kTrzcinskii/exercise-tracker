import { AiOutlineClose } from "react-icons/ai";

type CloseBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CloseBtn: React.FC<CloseBtnProps> = ({ ...props }) => {
  return (
    <button {...props}>
      <AiOutlineClose className='absolute right-3 top-3 md:right-4 md:top-4 lg:right-6 lg:top-6 cursor-pointer text-2xl md:text-3xl lg:text-4xl text-red-500 hover:scale-125 transition-all duration-200 ease-in-out' />
    </button>
  );
};

export default CloseBtn;
