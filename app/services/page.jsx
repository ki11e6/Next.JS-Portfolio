'use client';

import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'I build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    href: '',
  },
  {
    num: '02',
    title: 'Mobile Development',
    description:
      'I build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    href: '',
  },
  {
    num: '03',
    title: 'UI/UX Design',
    description:
      'I build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    href: '',
  },
  {
    num: '04',
    title: 'Digital Marketing',
    description:
      'I build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    href: '',
  },
];

const Services = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: 'easeIn',
            },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group flex flex-1 flex-col justify-center gap-6"
              >
                {/* top */}
                <div className="flex w-full items-center justify-between">
                  <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-500 hover:-rotate-45 group-hover:bg-accent"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
