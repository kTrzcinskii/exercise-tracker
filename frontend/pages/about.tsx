import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import HiddenText from "../components/About/HiddenText";
import MyLink from "../components/About/MyLink";
import Technology from "../components/About/Technology";
import Button from "../components/Button";

interface AboutProps {}

const About: NextPage<AboutProps> = ({}) => {
  const router = useRouter();

  return (
    <div className='overflow-y-hidden mx-auto py-10 px-5 md:py-12 lg:py-16 xl:py-20 max-w-sm md:max-w-lg lg:max-w-3xl xl:max-w-5xl'>
      <h1 className='text-3xl lg:text-5xl font-semibold text-blue-800 mb-5 lg:mb-8 xl:mb-10'>
        About Exercise Tracker
      </h1>
      <div>
        <HiddenText heading='What is this site for?'>
          <div>
            <p>
              Main goal of{" "}
              <Link href='/' passHref>
                <a className='text-blue-800 font-semibold hover:underline'>
                  Exercise Tracker
                </a>
              </Link>{" "}
              is to provide our users with convenient and reliable way of
              keeping track of their activities. It does not have professional
              analyses and is mostly focused on basic usage, such as checking
              the duration of your activity, date and your custom description.
              It is going to help you stay more organized and keep up with
              fulfilling your goals.
            </p>
          </div>
        </HiddenText>
        <HiddenText heading='Why there is no authorization?'>
          <div>
            <p>
              Even though authorization is one of the most important components
              on such a site, I cannot use it here because of very simple
              reason. This site is part of{" "}
              <Link
                href='https://www.freecodecamp.org/learn/back-end-development-and-apis'
                passHref
              >
                <a
                  className='text-blue-800 font-semibold hover:underline'
                  target='_blank'
                >
                  freeCodeCamp course on backend technologies
                </a>
              </Link>{" "}
              and in order to meet all the requirements there must be no
              authorization on this site.
            </p>
          </div>
        </HiddenText>
        <HiddenText heading='Reasons behind creating exercise tracker this way'>
          <div>
            <p>
              This project is one of the five final projects on freeCodeCamp
              Backend Course. You can see more about it{" "}
              <Link
                href='https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker'
                passHref
              >
                <a
                  className='text-blue-800 font-semibold hover:underline'
                  target='_blank'
                >
                  here
                </a>
              </Link>
            </p>
            <p>
              However, I&apos;ve decided I want to build a fullstack app so that
              I can show a variety of skills I learnt from this and other
              courses I&apos;ve taken on freeCodeCamp site.
            </p>
            <p className='text-gray-900 font-semibold mt-4 text-center text-lg lg:text-xl'>
              Technologies I&apos;ve used while creating this project
            </p>
            <Technology />
            <p className='italic'>Everything was written in TypeScript.</p>
          </div>
        </HiddenText>
        <HiddenText heading='Created by'>
          <div>
            <p className='font-semibold'>
              This site was created by Kacper Trzciński
            </p>
            <p className='mt-3 font-semibold text-blue-800'>Useful links:</p>
            <ul className='space-y-2 mt-2'>
              <MyLink href='https://github.com/kTrzcinskii'>
                GitHub Profile
              </MyLink>
              <MyLink href='https://github.com/kTrzcinskii/exercise-tracker'>
                Project Repository
              </MyLink>
              <MyLink href='/'>Backend</MyLink>
            </ul>
          </div>
        </HiddenText>
      </div>
      <div className='flex justify-center mt-6 lg:mt-10'>
        <Button onClick={() => router.back()}>Go back</Button>
      </div>
    </div>
  );
};

export default About;
