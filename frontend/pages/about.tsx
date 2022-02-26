import type { NextPage } from "next";
import { useRef } from "react";
import HiddenText from "../components/About/HiddenText";

interface AboutProps {}

const About: NextPage<AboutProps> = ({}) => {
  return (
    <div className='overflow-y-hidden mx-auto py-10 px-5 md:py-12 lg:py-16 xl:py-20 max-w-sm md:max-w-lg lg:max-w-3xl xl:max-w-5xl'>
      <h1 className='text-3xl lg:text-5xl font-semibold text-blue-800 mb-5 lg:mb-8 xl:mb-10'>
        About Exercise Tracker
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        quod officia sed deserunt nemo architecto facilis nulla debitis ad,
        maxime iusto soluta repellendus natus sapiente voluptatem aliquid,
        doloribus inventore error obcaecati corrupti omnis, ullam amet possimus.
        Voluptatum labore totam repellat! Expedita exercitationem, voluptas in
        pariatur voluptate quos eos eaque nisi voluptates laboriosam, fugiat,
        voluptatibus earum optio alias aperiam temporibus! Neque, officiis error
        iusto quisquam modi blanditiis amet, ullam dolorum quibusdam debitis
        aspernatur obcaecati! Modi qui eos, provident maiores quaerat nostrum
        voluptatem accusantium a suscipit ex autem quod veritatis distinctio
        eaque cumque animi recusandae. Architecto impedit quibusdam amet,
        consequuntur eaque maiores?
      </p>
      <HiddenText heading='Test'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          voluptas animi ratione dolorem eligendi id aperiam doloremque suscipit
          sint veritatis eveniet ea repellat saepe itaque et, eius nam rerum.
          Nesciunt numquam pariatur et aut culpa repellat cupiditate illo
          placeat, reiciendis dolorem, veniam eligendi rerum obcaecati facilis
          expedita officiis, similique error. Vero eaque ut voluptatum corrupti,
          illum aperiam sapiente earum. At corrupti, magni aliquid repellendus,
          numquam beatae autem iste ipsum molestiae adipisci enim officia
          voluptas ducimus. Possimus doloremque voluptate praesentium alias,
          cupiditate iste exercitationem hic ratione quod maxime tempore
          assumenda dolor vero quaerat nam quisquam odio at impedit quibusdam
          culpa saepe.
        </p>
      </HiddenText>
    </div>
  );
};

export default About;
