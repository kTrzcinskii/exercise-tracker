import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/Button";
import CreateUserModal from "../components/CreateUserModal";
import Heading from "../components/Home/Heading";
import HomeBtnContainer from "../components/Home/HomeBtnContainer";
import HomeWrapper from "../components/Home/HomeWrapper";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HomeWrapper>
        <div className='flex flex-col justify-center'>
          <Heading />
          <HomeBtnContainer setShowModal={setShowModal} />
        </div>
      </HomeWrapper>
      <CreateUserModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Home;
