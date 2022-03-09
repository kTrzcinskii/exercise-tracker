import type { NextPage } from "next";
import { useEffect, useState } from "react";
import SearchBar from "../components/AllUsers/SearchBar";
import UserCard from "../components/AllUsers/UserCard";
import BigLoading from "../components/BigLoading";
import Navbar from "../components/Navbar";
import useLoadAllUsers from "../hooks/query/useLoadAllUsers";

interface usersProps {}

const Users: NextPage<usersProps> = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, isError } = useLoadAllUsers();
  const [realData, setRealData] = useState(data);

  useEffect(() => {
    const newData = data?.filter((user) => user.username.includes(searchTerm));
    setRealData(newData);
  }, [searchTerm, data]);

  if (isLoading && !data) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Navbar />
        <BigLoading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className='flex justify-center items-center h-screen flex-col'>
        <Navbar />
        <h1 className='text-6xl md:text-7xl text-center text-blue-900'>500</h1>
        <h1 className='text-2xl md:text-3xl text-center text-blue-800'>
          There is a problem with the sever at the moment.
        </h1>
        <h2 className='text-lg md:text-xl text-center text-gray-800'>
          Please try again later.
        </h2>
      </div>
    );
  }

  if (realData?.length === 0) {
    return (
      <>
        <Navbar />
        <div className='mt-36 mx-auto'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className='text-xl md:text-2xl text-center text-blue-800 mt-5 md:mt-7 lg:mt-10'>
            There isn&apos;t any user matching your searching criteria.
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className='mt-36 mx-auto'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1000px] gap-3 md:gap-5 lg:gap-7 mx-auto my-3 md:my-5 lg:my-8'>
          {realData?.map((user) => {
            return (
              <UserCard
                username={user.username}
                userId={user._id}
                key={user._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
