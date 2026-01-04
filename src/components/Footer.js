import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6 md:items-start md:gap-2'>
        <span className='md:order-1'>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        
        <div className='flex items-center md:order-2 lg:py-2'>
          Build With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> by&nbsp; 
          <Link href="/Bright.html" className='underline underline-offset-2' target='_blank'>Bright</Link>
        </div>
        
        <Link href="mailto:obiorahbrightifenna@gmail.com" target='_blank' className='underline underline-offset-2 md:order-3'>
          Say Hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer