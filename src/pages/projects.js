import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/Project-1.PNG"
import project2 from "../../public/images/projects/reliance.png"
import project3 from "../../public/images/projects/lovistry.png"
import project4 from "../../public/images/projects/fashion-studio-website.jpg"
import {motion} from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-6 md:p-5 sm:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 sm:-right-1 md:w-[45%] md:h-[85%]
            sm:w-[40%] sm:h-[50%]
            '/>
            
            <Link 
                href={link} 
                target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage 
                    src={img} 
                    alt={title} 
                    className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                />
            </Link>
            
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl xs:text-xl'>
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
                    {summary}
                </p>
                <div className='mt-2 flex items-center sm:flex-col sm:items-start sm:gap-3 sm:w-full'>
                    <Link href={github} target='_blank' className='w-10 sm:w-8'>
                        <GithubIcon/>
                    </Link>
                    <Link 
                        href={link} 
                        target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light sm:px-4 sm:text-base sm:ml-0 sm:w-full sm:text-center'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Projects = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 sm:-right-1'/>
            
            <Link 
                href={link} 
                target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage 
                    src={img} 
                    alt={title} 
                    className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold dark:text-light sm:text-xl xs:text-lg'>
                        {title}
                    </h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link 
                        href={link} 
                        target='_blank'
                        className='underline font-semibold text-dark hover:text-primary dark:text-light dark:hover:text-primaryDark sm:text-sm'
                    >
                        Visit
                    </Link> 
                    <Link href={github} target='_blank' className='w-8 sm:w-7'>
                        <GithubIcon/>
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
   <>
     <Head>
      <title>Bright | Projects Page</title>
      <meta name='description' content='This is an about us page for the movement'/>
     </Head>
     <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText 
                text="Creativity Meets Functionality" 
                className='mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-3xl' 
            />
            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12  md:w-[60%] md:h-[60%]'>
                    <FeaturedProject
                        title="A full-stack Voting System"
                        img={project1}
                        summary="built with the MERN stack (MongoDB, Express.js, React, Node.js). This robust application enables users to create, manage, and participate in polls with real-time vote tracking. Features comprehensive authentication and authorization, RESTful API architecture tested with Postman, and responsive UI design. The backend is deployed on Render, ensuring reliable and scalable performance for handling concurrent voting sessions."
                        link="https://bumsemalumni.com/"
                        github="https://github.com/Bright-devops/voting-app-deployment"
                        type="Featured Projects"
                    />
                </div>

                <div className='col-span-6 md:col-span-12 md:w-[60%] md:h-[60%]'>
                   <Projects
                        title="Revamping Reliance Ecommerce Website"
                        img={project2}
                        link="https://reliance.cm/"
                        github="#"
                        type="April 2025"
                    />
                </div>

                <div className='col-span-6 md:col-span-12 md:w-[60%] md:h-[60%]'>
                    <Projects
                        title="Building Lovistry Dating Website using Next.js"
                        img={project3}
                        link="https://dating-app-building-using-nextjs.onrender.com/"
                        github="https://github.com/Bright-devops/Dating-App-building-using-Nextjs-supabase-and-Stream"
                        type="June 2025"
                    />
                </div>

                <div className='col-span-12 md:w-[60%] md:h-[60%]'>
                    <FeaturedProject
                        title="Fashion Studio E-commerce Platform"
                        img={project4}
                        summary="built with the MERN stack (MongoDB, Express.js, React, Node.js). This robust application enables users to purchase their customized clothes and brand their shirts. This is a robust ecommerce website built with close to 17 pages"
                        link="/"
                        github="/"
                        type="Featured Projects"
                    />
                </div>
            </div>  
        </Layout>
    </main>
   </>
  )
}

export default projects