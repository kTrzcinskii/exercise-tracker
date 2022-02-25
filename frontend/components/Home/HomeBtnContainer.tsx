import { Dispatch, SetStateAction } from "react";
import Button from "../Button";

interface HomeBtnContainerProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const HomeBtnContainer: React.FC<HomeBtnContainerProps> = ({
  setShowModal,
}) => {
  return (
    <>
      <div className='mx-auto mb-3'>
        <Button onClick={() => setShowModal(true)} classNames='w-40'>
          Create User
        </Button>
        <Button onClick={() => console.log("test")} classNames='w-40 ml-3'>
          Browse Users
        </Button>
      </div>
      <div className='mx-auto'>
        <Button
          onClick={() => console.log("test")}
          classNames='w-40'
          variantType='secondary'
        >
          Learn more
        </Button>
      </div>
    </>
  );
};

export default HomeBtnContainer;
