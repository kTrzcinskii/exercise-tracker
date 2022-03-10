import Image from "next/image";
import ProfilePic from "../../images/prof_pic.png";

interface ProfileHeadingProps {
  username: string;
  count: number;
}

const ProfileHeading: React.FC<ProfileHeadingProps> = ({ username, count }) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-4 md:space-y-6 lg:space-y-10'>
      <div className='relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80'>
        <Image
          src={ProfilePic}
          alt='Profile Picture'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='space-y-2 md:space-y-4 lg:space-y-6'>
        <h3 className='font-semibold text-blue-800 text-3xl md:text-4xl lg:text-5xl text-center'>
          {username}
        </h3>
        <p className='text-gray-700 text-sm md:text-base lg:text-lg text-center'>
          Exercises done:{" "}
          <span className='text-slate-800 font-semibold'>{count}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileHeading;
