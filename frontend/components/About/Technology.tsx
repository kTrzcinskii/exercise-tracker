import MyLink from "./MyLink";
import TechContainer from "./TechContainer";

interface TechnologyProps {}

const Technology: React.FC<TechnologyProps> = ({}) => {
  return (
    <div className='flex flex-row justify-evenly my-3'>
      <TechContainer leftOrRight='left'>
        <p className='font-semibold text-blue-800 lg:text-lg'>Frontend:</p>
        <ul>
          <MyLink href='https://nextjs.org'>React with NextJS</MyLink>
          <MyLink href='https://tailwindcss.com'>TailwindCSS</MyLink>
          <MyLink href='https://react-query.tanstack.com'>React Query</MyLink>
          <MyLink href='https://formik.org'>Formik</MyLink>
        </ul>
      </TechContainer>
      <TechContainer leftOrRight='right'>
        <p className='font-semibold text-blue-800 text-right lg:text-lg'>
          Backend:
        </p>
        <ul className='text-right'>
          <MyLink href='https://expressjs.com' leftOrRight='right'>
            ExpressJS
          </MyLink>
          <MyLink href='https://mongoosejs.com' leftOrRight='right'>
            MongoDB with Mongoose
          </MyLink>
        </ul>
      </TechContainer>
    </div>
  );
};

export default Technology;
