import type { NextPage } from "next";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import HiddenText from "../components/About/HiddenText";
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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            voluptas animi ratione dolorem eligendi id aperiam doloremque
            suscipit sint veritatis eveniet ea repellat saepe itaque et, eius
            nam rerum. Nesciunt numquam pariatur et aut culpa repellat
            cupiditate illo placeat, reiciendis dolorem, veniam eligendi rerum
            obcaecati facilis expedita officiis, similique error. Vero eaque ut
            voluptatum corrupti, illum aperiam sapiente earum. At corrupti,
            magni aliquid repellendus, numquam beatae autem iste ipsum molestiae
            adipisci enim officia voluptas ducimus. Possimus doloremque
            voluptate praesentium alias, cupiditate iste exercitationem hic
            ratione quod maxime tempore assumenda dolor vero quaerat nam
            quisquam odio at impedit quibusdam culpa saepe.
          </p>
        </HiddenText>
        <HiddenText heading='Why there is no authorization?'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            minus. Laudantium aut ea, quibusdam unde dolore tempore recusandae
            odio doloribus?
          </div>
        </HiddenText>
        <HiddenText heading='Reasons behind creating exercise tracker this way'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            beatae provident rerum earum quibusdam, voluptate numquam ea quo
            autem impedit perspiciatis sequi explicabo, voluptates sunt!
            Repellendus sequi praesentium iste tempora? Repellat obcaecati
            accusantium qui nisi unde impedit consequatur accusamus omnis, quasi
            minus, iure, debitis doloremque quibusdam nam earum cum similique.
          </p>
        </HiddenText>
        <HiddenText heading='Created by'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim minus
            quos at voluptatibus ipsam facere temporibus qui ab similique
            pariatur reiciendis rerum expedita suscipit est voluptate maiores
            dolorem accusamus dolores nihil, laborum nemo commodi mollitia.
            Quibusdam asperiores amet accusantium! Quos atque ea, laudantium
            enim nam amet ab. Repudiandae quae neque itaque accusamus quibusdam
            fuga debitis tenetur odio laborum nam. Mollitia eveniet sint veniam
            similique ducimus, corporis harum itaque porro ut eos aspernatur,
            error omnis amet repellendus labore ex nihil quaerat debitis
            consequatur. Quo odio, consequuntur eveniet neque ipsum deserunt
            incidunt, eaque velit nostrum dignissimos eos. Vitae vel unde odio
            blanditiis repellendus debitis provident omnis eligendi expedita
            atque, molestias, ab accusantium. Fugiat sunt impedit natus quaerat
            ipsum dignissimos quibusdam aspernatur accusamus architecto,
            sapiente illo alias enim obcaecati praesentium maiores, sit
            cupiditate, soluta quam odit quo mollitia animi dolore autem. Nobis
            mollitia blanditiis, sequi eaque, in maxime laborum perferendis,
            ducimus illo aperiam consectetur iusto quam aspernatur placeat quo!
            Maiores, illum deserunt, mollitia velit ratione praesentium rerum
            ullam cupiditate suscipit reiciendis ducimus explicabo impedit amet
            architecto quos delectus! Sed, modi ea iusto tempore error
            reprehenderit eaque, adipisci earum repudiandae sint sit sapiente
            nemo consequatur aut exercitationem? Soluta deleniti dolorem
            exercitationem nihil provident omnis nisi hic dignissimos
            consequuntur explicabo ex unde odit distinctio et id suscipit in est
            numquam quae, rerum repudiandae facilis voluptas. Hic eveniet dolore
            odio nihil eaque id, maiores recusandae ad, saepe accusantium
            inventore vitae consectetur repellat neque esse et doloribus.
            Voluptas, reiciendis qui optio temporibus ut aliquam iste excepturi,
            voluptatibus molestiae, similique dolorem a? Praesentium repudiandae
            voluptate commodi assumenda, neque eaque nam veritatis repellat
            quidem labore ipsa ut dolorum obcaecati officiis harum laudantium at
            saepe minus culpa! Iusto fugiat sapiente asperiores, similique illum
            facilis. Explicabo esse aspernatur accusamus ex eos, dolores
            perferendis iste eaque dolorem enim reiciendis velit asperiores
            tempore?
          </p>
        </HiddenText>
      </div>
      <div className='flex justify-center mt-6 lg:mt-10'>
        <Button onClick={() => router.push("/")}>
          Go back to the home page
        </Button>
      </div>
    </div>
  );
};

export default About;
