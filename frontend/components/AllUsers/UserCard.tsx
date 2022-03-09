import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import ProfilePic from "../../images/prof_pic.png";

interface UserCardProps {
  username: string;
  userId: string;
}

const UserCard: React.FC<UserCardProps> = ({ username, userId }) => {
  const router = useRouter();

  const [text, setText] = useState(username);

  return (
    <div
      className='group flex flex-row justify-between items-center bg-white text-blue-800  rounded-md px-4 py-2 md:px-5 md:py-3 lg:px-7 lg:py-5 lg:w-[300px] mx-auto min-w-[200px] shadow-md cursor-pointer hover:bg-blue-800 hover:text-white transition-all duration-150 ease-in-out'
      onClick={() => router.push(`/user/${userId}`)}
      onMouseEnter={() => setText("See Profile")}
      onMouseLeave={() => setText(username)}
    >
      <div className='relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12'>
        <Image
          src={ProfilePic}
          alt='Profile Picture'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div>
        <h1 className='font-semibold md:text-lg lg:text-xl group-hover:mr-10 transition-all duration-150 ease-in-out'>
          {text}
        </h1>
      </div>
    </div>
  );
};

export default UserCard;
