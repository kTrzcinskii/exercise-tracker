import type { NextPage } from "next";
import Heading from "../components/Home/Heading";
import HomeBtnContainer from "../components/Home/HomeBtnContainer";
import HomeWrapper from "../components/Home/HomeWrapper";

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <div className='flex flex-col justify-center'>
        <Heading />
        <HomeBtnContainer />
      </div>
    </HomeWrapper>
  );
};

export default Home;
