interface HomeWrapperProps {}

const HomeWrapper: React.FC<HomeWrapperProps> = ({ children }) => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      {children}
    </div>
  );
};

export default HomeWrapper;
