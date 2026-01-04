import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"]
  })
  
  return (
    <figure className='absolute left-0 -translate-x-1/2 stroke-dark dark:stroke-light'>
       <svg className='-rotate-90' width="95" height="75" viewBox='0 0 100 100'>
        <circle cx="50" cy="50" r="20" className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none' />
        <motion.circle 
          cx="50" 
          cy="50" 
          r="20" 
          className='stroke-[5px] fill-light dark:fill-dark'
          style={{
            pathLength: scrollYProgress
          }}
        />
        <motion.circle 
          cx="50" 
          cy="50" 
          r="10" 
          className='animate-pulse stroke-[5px] fill-primary dark:fill-primaryDark'
          style={{
            pathLength: scrollYProgress
          }}
        />
       </svg>
    </figure>
  )
}

export default LiIcon