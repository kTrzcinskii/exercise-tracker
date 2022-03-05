import Button from "../Button";
import { RiAddFill } from "react-icons/ri";
import { Dispatch, SetStateAction } from "react";

interface AddLogBtnProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const AddLogBtn: React.FC<AddLogBtnProps> = ({ setShowModal }) => {
  return (
    <div className='flex justify-center mt-3 md:mt-5 lg:mt-8'>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        classNames='w-48'
      >
        <div className='flex flex-row justify-around items-center'>
          <RiAddFill className='text-white font-semibold text-xl' />
          Add new exercise
        </div>
      </Button>
    </div>
  );
};

export default AddLogBtn;
