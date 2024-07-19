'use client';

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaCss3,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// about data
const about = {
  title: 'About me',
  descritpion:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quae.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Luke Coleman',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+91) 7025127271',
    },

    {
      fieldName: 'Experience',
      fieldValue: '12+ years',
    },
    {
      fieldName: 'Skype',
      fieldValue: 'Luke.01',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indian',
    },
    {
      fieldName: 'Email',
      fieldValue: 'Luke.01oleman@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Hindi, French',
    },
  ],
};

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  descritpion:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quae.',
  items: [
    {
      company: 'Tech Solutions Inc.',
      position: 'Full Stack Developer',
      duration: 'Jan 2023 - Present',
    },
    {
      company: 'Web Solutions.',
      position: 'Front End Developer',
      duration: 'Dec 2020 - Jan 2023',
    },
    {
      company: 'E-commerce Solutions.',
      position: 'Freelance Developer',
      duration: 'May 2018 - Dec 2020',
    },
    {
      company: 'Product Solutions.',
      position: 'Junior Developer',
      duration: 'Jan 2018 - May 2018',
    },
    {
      company: 'Software Solutions.',
      position: 'Intern Developer',
      duration: 'May 2017 - Jan 2018',
    },
    {
      company: 'Software Solutions.',
      position: 'Intern Developer',
      duration: 'May 2017 - Jan 2018',
    },
  ],
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  descritpion:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quae.',
  items: [
    {
      Institution: 'Online Course Platform',
      degree: 'Full Stack Web Developer Bootcamp',
      duration: '2023',
    },
    {
      Institution: 'codecademy',
      degree: 'Front-end Track',
      duration: '2022',
    },
    {
      Institution: 'Online Course',
      degree: 'Programming Course',
      duration: '2020-2021',
    },
  ],
};

// skills data
const skills = {
  title: 'My skills',
  descritpion:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quae.',
  skillList: [
    {
      name: 'HTML',
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS',
      icon: <FaCss3 />,
    },
    {
      name: 'JavaScript',
      icon: <FaJs />,
    },
    {
      name: 'React',
      icon: <FaReact />,
    },
    {
      name: 'Figma',
      icon: <FaFigma />,
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
    },
  ],
};

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: 'easeIn', delay: 2.4 },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.descritpion}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {education.descritpion}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p>{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {skills.descritpion}
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {about.descritpion}
                </p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
