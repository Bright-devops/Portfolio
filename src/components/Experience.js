import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  
  return (
    <li ref={ref} className="mb-8 ml-8 first:mt-0 last:mb-0 w-[85%] mx-auto flex flex-col items-center justify-between md:w-[80% ]">
      <LiIcon reference={ref}/>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full"
      >
        <div>
          <h3 className="capitalize font-bold text-2xl text-gray-900 dark:text-light sm:text-xl xs:text-lg">
            {position} <a href={companyLink} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">@{company}</a>
          </h3>
          <span className="block mb-2 text-sm font-normal text-gray-500 dark:text-light/75
          xs:text-sm">
            {time} | {address}
          </span>
          <p className="text-base font-normal text-gray-700 dark:text-light/90 md:text-sm">
            {work}
          </p>
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-16 w-full text-center text-gray-900 dark:text-light md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-full md:w-[95%] mx-auto relative lg:w-[90%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0 top-0 w-[4px] h-full bg-gray-800 dark:bg-light origin-top ml-1.5"
        />
        <ul className="relative w-full flex flex-col items-start justify-between ml-4 xs:ml-2 md:ml-2 lg:ml-3 xl:ml-2">
          <Details
            position="Full-Stack Developer"
            company="Lovistry"
            companyLink="https://lovistry.com"
            time="2025"
            address="Remote"
            work="Architected and developed a comprehensive dating application from the ground up using Next.js. Implemented real-time messaging features and user matching algorithms. Designed and built responsive UI components ensuring seamless user experience across devices. Integrated secure authentication systems and user profile management features. Optimized application performance and implemented best practices for scalability."
          />
          
          <Details
            position="Frontend Developer"
            company="Anchor Credit Loan Company"
            companyLink="https://anchorcredit.com"
            time="2025"
            address="Remote"
            work="Developed the entire frontend interface for a financial loan platform using Vue.js and Tailwind CSS. Created intuitive user dashboards for loan application tracking and management. Implemented responsive design patterns ensuring accessibility across all devices. Collaborated with backend team to integrate RESTful APIs for seamless data flow. Ensured compliance with financial industry UI/UX best practices."
          />
          
          <Details
            position="Founder & Lead Developer"
            company="Swinotech Web Agency"
            companyLink="https://swinotech.com"
            time="2018 - Present"
            address="Remote"
            work="Founded and manage a successful web development agency specializing in custom web solutions. Lead development teams in delivering high-quality projects for diverse clients. Provide strategic consulting on web architecture, SEO, and digital marketing. Manage client relationships, project timelines, and technical requirements. Built and maintained agency portfolio including major projects: Bumsem Alumni Voting Application (2024), Reliance E-commerce Platform with MERN Stack (2022), Muxo.ca E-commerce Website (2021), Ezeogidi Motors E-commerce Platform (2020), Geoelis Cables Website (2019), and Cutixplc Corporate Website (2018)."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;