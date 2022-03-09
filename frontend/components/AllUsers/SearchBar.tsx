import { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='flex justify-center items-center'>
      <input
        className='lg:text-lg mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-75 transition-all duration-75 ease-in-out max-w-[250px] md:max-w-md lg:max-w-lg'
        placeholder='Search user...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
