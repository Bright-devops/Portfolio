import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  
  return (
    <li ref={ref} className="mb-8 ml-8 first:mt-0 last:mb-0 w-[95%] mx-auto flex flex-col items-center justify-between md:w-[90% ]">
      <LiIcon reference={ref}/>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full"
      >
        <div>
          <h3 className="capitalize font-bold text-2xl text-gray-900 dark:text-light">
            {type}
          </h3>
          <span className="block mb-2 text-sm font-normal text-gray-500 dark:text-light/75
          xs:text-sm">
            {time} | {place}
          </span>
          <p className="text-base font-normal text-gray-700 dark:text-light/90 md:text-sm">
            {info}
          </p>
        </div>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <div className="my-32 px-4">
      <h2 className="font-bold text-6xl mb-16 w-full text-center text-gray-900 dark:text-light md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-full md:w-[95%] mx-auto relative lg:w-[90%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0 top-0 w-[4px] h-full bg-gray-800 dark:bg-light origin-top ml-1.5"
        />
        <ul className="relative w-full flex flex-col items-start justify-between ml-4 xs:ml-2 md:ml-2 lg:ml-2 xl:ml-2">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2013-2017"
            place="University of Benin"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <Details
            type="SSCE"
            time="2006-2012"
            place="Bishop Uzodike Memorial Seminary"
            info="Basic Secondary School"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;