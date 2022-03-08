import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import BigLoading from "../../components/BigLoading";
import Navbar from "../../components/Navbar";
import AddLogBtn from "../../components/User/AddLogBtn";
import CreateLogModal from "../../components/User/CreateLogModal";
import ProfileHeading from "../../components/User/ProfileHeading";
import UserLogs from "../../components/User/UserLogs";
import useLoadSingleUser from "../../hooks/query/useLoadSingleUser";

interface SingleUserPageProps {}

const SingleUserPage: NextPage<SingleUserPageProps> = ({}) => {
  const router = useRouter();
  let userId = "";

  const [showModal, setShowModal] = useState(false);

  if (typeof router.query.id === "string") {
    userId = router.query.id;
  }

  const { data, isError, isLoading } = useLoadSingleUser(userId);

  if (isLoading && !data) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Navbar />
        <BigLoading />
      </div>
    );
  }

  if (data?.Error || isError) {
    return (
      <div className='flex justify-center items-center h-screen flex-col'>
        <Navbar />
        <h1 className='text-6xl md:text-7xl text-center text-blue-900'>404</h1>
        <h1 className='text-2xl md:text-3xl text-center text-blue-800'>
          We couldn&apos;t find this user.
        </h1>
        <h2 className='text-lg md:text-xl text-center text-gray-800'>
          Make sure to enter the correct id in the url.
        </h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className='mt-52 mx-auto'>
        <ProfileHeading count={data?.count!} username={data?.username!} />
        <AddLogBtn setShowModal={setShowModal} />
        <UserLogs logs={data?.log!} />
      </div>
      <CreateLogModal
        showModal={showModal}
        setShowModal={setShowModal}
        userId={userId}
      />
    </>
  );
};

export default SingleUserPage;
