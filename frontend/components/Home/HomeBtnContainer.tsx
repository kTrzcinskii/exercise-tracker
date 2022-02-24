import Button from "../Button";

const HomeBtnContainer: React.FC = ({}) => {
  return (
    <>
      <div className='mx-auto mb-3'>
        <Button onClick={() => console.log("test")} classNames='w-40'>
          Create User
        </Button>
        <Button onClick={() => console.log("test")} classNames='w-40 ml-3'>
          Browse Users
        </Button>
      </div>
      <div className='mx-auto'>
        <Button
          onClick={() => console.log("test")}
          classNames='w-40'
          type='secondary'
        >
          Learn more
        </Button>
      </div>
    </>
  );
};

export default HomeBtnContainer;
