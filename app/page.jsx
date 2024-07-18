import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

const Name = 'Luke Coleman';
const Profession = 'Software Developer';
const Summary =
  'I am a software developer. I love to build stuffs. I am also a learner. I am always looking for new things to learn. I am always looking for new things to learn. I am always looking for new things to learn.';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          {/* name */}
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">{Profession}</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">{Name}</span>
            </h1>
            {/* summary */}
            <p className="mb-9 max-w-[500px] text-white/80">{Summary}</p>
            {/* social links */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconsStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
