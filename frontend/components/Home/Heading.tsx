const Heading: React.FC = ({}) => {
  return (
    <div className='mb-16 max-w-xs md:max-w-lg lg:max-w-2xl xl:max-w-4xl'>
      <h1 className='text-4xl md:text-5xl md:text-center font-semibold text-blue-800 mb-3 md:mb-5'>
        Exercise Tracker
      </h1>
      <h3 className='text-lg md:text-xl text-slate-700'>
        It&apos;s a website where you can keep track of your activities and
        share your progress with friends and family. Don&apos;t wait and try it
        out today!
      </h3>
    </div>
  );
};

export default Heading;
