import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { use, useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-3.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'


const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000})

const isInView = useInView(ref, {once:true});

useEffect(() => {
  if(isInView){
    motionValue.set(value);
  }
}, [isInView, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest.toFixed(0);
    }
  })
}, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
  <>
    <Head>
      <title>Bright | About Me Page</title>
      <meta name='description' content='This is an about us page for the movement'/>
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText text='Passion Fuels Purpose' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
        
        <div className='grid w-full grid-cols-8 gap-16 dark:text-light xl:gap-12 lg:gap-8 md:flex md:flex-col md:gap-12 md:-mx-8 md:px-8 sm:-mx-4 sm:px-4 xs:-mx-3 xs:px-3'>
          
          {/* Image Section - ORDER 1 on mobile */}
          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:w-full md:order-1 sm:p-6 xs:p-4 md:col-span-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
            <Image 
              src={profilePic} 
              alt='Bright' 
              className='w-full h-auto rounded-2xl' 
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>

          {/* Biography Section - ORDER 2 on mobile */}
          <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:w-full md:order-2 md:col-span-8'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
            <p className='my-4 font-medium'>
              - Hi, I'm Obiorah Bright, a web developer, mobile app developer and seo strategist with a passion for creating beautiful, functional, 
              and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
              new and innovative ways to bring my clients' visions to life.
            </p>
            <p className='my-4 font-medium'>
              - I believe that design is about more than just making things look pretty – it's about solving problems and 
              creating intuitive, enjoyable experiences for users. 
            </p>
            <p className='my-4 font-medium'>
              - Whether I'm working on a website, mobile app, or 
              other digital product, I bring my commitment to design excellence and user-centered thinking to 
              every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </div>

          {/* Stats Counter Section - ORDER 3 on mobile */}
          <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:w-full md:order-3 md:flex-col md:items-center md:gap-8'>

            <div className='flex flex-col items-end justify-center xl:items-center md:items-center md:w-full'>
              <span className='inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                <AnimatedNumbers value={50}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-lg sm:text-base xl:text-center xs:text-sm'>
                Satisfied Clients
              </h2>
            </div>

            <div className='flex flex-col items-end justify-center xl:items-center md:items-center md:w-full'>
              <span className='inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                <AnimatedNumbers value={40}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-lg sm:text-base xl:text-center xs:text-sm'>
                Projects Completed
              </h2>
            </div>

            <div className='flex flex-col items-end justify-center xl:items-center md:items-center md:w-full'>
              <span className='inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                <AnimatedNumbers value={8}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-lg sm:text-base xl:text-center xs:text-sm'>
                Years of Experience
              </h2>
            </div>

          </div>

        </div>

        <Skills/>
        <Experience/>
        <Education/> 
      </Layout>
    </main>
  </>
  )
}

export default about