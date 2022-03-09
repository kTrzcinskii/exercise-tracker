import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import Button from "../Button";

interface HomeBtnContainerProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const HomeBtnContainer: React.FC<HomeBtnContainerProps> = ({
  setShowModal,
}) => {
  const router = useRouter();

  return (
    <>
      <div className='mx-auto mb-3'>
        <Button onClick={() => setShowModal(true)} classNames='w-40'>
          Create User
        </Button>
        <Button onClick={() => router.push("/users")} classNames='w-40 ml-3'>
          Browse Users
        </Button>
      </div>
      <div className='mx-auto'>
        <Button
          onClick={() => router.push("/about")}
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
