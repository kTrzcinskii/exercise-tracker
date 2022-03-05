import Button from "../Button";
import { RiAddFill } from "react-icons/ri";

const AddLogBtn: React.FC = ({}) => {
  return (
    <div className='flex justify-center mt-3 md:mt-5 lg:mt-8'>
      <Button
        onClick={() => console.log("im adding new activity")}
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
