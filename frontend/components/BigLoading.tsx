import { ImSpinner10 } from "react-icons/im";

const BigLoading: React.FC = ({}) => {
  return (
    <ImSpinner10 className='text-7xl md:text-8xl lg:text-9xl text-blue-800 animate-spin' />
  );
};

export default BigLoading;
