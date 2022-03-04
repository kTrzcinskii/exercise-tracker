import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import Button from "./Button";
import CreateUserModal from "./CreateUserModal";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='bg-blue-600 py-3 lg:py-6 absolute top-0 left-0 right-0 z-[3] '>
        <div className='mx-auto flex flex-col space-y-3 md:flex-row justify-around items-center max-w-[1000px] '>
          <Link href='/users'>
            <a className='font-semibold text-white text-4xl md:text-5xl'>
              Exercise Tracker
            </a>
          </Link>
          <div className='flex flex-row justify-between items-center space-x-3'>
            <Button
              onClick={() => setShowModal(true)}
              classNames='w-40'
              variantType='primary-nav'
            >
              Create User
            </Button>
            <Button
              onClick={() => router.push("/about")}
              classNames='w-40'
              variantType='secondary-nav'
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <CreateUserModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Navbar;
