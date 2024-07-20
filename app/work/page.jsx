'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub, BsYoutube } from 'react-icons/bs';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quae.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'JavaScript' }],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
    youtube: 'https://www.youtube.com/embed/YLslsZuEaNE',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'project 2',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quae.',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind.css' },
      { name: 'JavaScript' },
    ],
    image: '/assets/work/thumb2.png',
    live: '',
    github: '',
    youtube: 'https://www.youtube.com/embed/YLslsZuEaNE',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quae.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'JavaScript' }],
    image: '/assets/work/thumb3.png',
    live: '',
    github: '',
    youtube: 'https://www.youtube.com/embed/YLslsZuEaNE',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;

    //set current project
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* project details */}
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-outline text-8xl font-extrabold leading-none text-transparent">
                {project.num}
              </div>
              {/* project catogory */}
              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* model */}
              </div>
            </div>
          </div>
          {/* project slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-black/10"></div>
                      {/* image */}
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          alt="project image"
                          fill
                          className="object-cover"
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_+_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
