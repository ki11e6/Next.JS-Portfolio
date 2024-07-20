'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '123-456-7890',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'b5x5S@example.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: '123 Main St, Anytown USA',
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form */}
          <div className="order-2 xl:order-none xl:h-[54%]">
            <form
              action=""
              className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
            >
              <h3 className="text-4xl text-accent">Get in touch</h3>
              <p className="text-white/60">
                Fill out the form below to get in touch with me.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input type="firstname" placeholder="First Name" required />
                <Input type="lastname" placeholder="Last Name" required />
                <Input type="email" placeholder="Email" required />
                <Input type="phone" placeholder="Phone" required />
              </div>
              {/* service select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="service-1">Service 1</SelectItem>
                    <SelectItem value="service-2">Service 2</SelectItem>
                    <SelectItem value="service-3">Service 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* message */}
              <Textarea
                placeholder="Type your message here..."
                className="h-[200px]"
                required
              />
              {/* button */}
              <Button type="submit" className="max-w-40">
                Submit
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:h-[72px] xl:w-[72px]">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
