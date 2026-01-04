import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router';
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-light`}>
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  }

  return (
    <button onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`}>
      {title}
      <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-dark`}>
        &nbsp;
      </span>
    </button>
  )
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-8 sm:px-4 xs:px-4'>
      
      {/* Hamburger Menu Button - Only visible on mobile/tablet */}
      <button 
        className='flex-col justify-center items-center hidden lg:flex' 
        onClick={handleClick}
        aria-label="Toggle menu"
      >
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden'>
        {/* Desktop Navigation */}
        <nav className='flex items-center'>
          <CustomLink href="/" title='Home' className='mr-4' />
          <CustomLink href="/about" title='About' className='mx-4' />
          <CustomLink href="/projects" title='Projects' className='mx-4' />
          <CustomLink href="/articles" title='Articles' className='ml-4' />
        </nav>

        {/* Social Icons and Theme Switcher - Desktop */}
        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3 rounded-full border border-solid border-transparent hover:border-dark dark:hover:border-light p-1 transition-colors"
            aria-label="Twitter"
          >
            <TwitterIcon className="fill-dark dark:fill-light" />
          </motion.a>

          <motion.a
            href=""
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3 rounded-full border border-solid border-transparent hover:border-dark dark:hover:border-light p-1 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="fill-dark dark:fill-light" />
          </motion.a>

          <motion.a
            href=""
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3 rounded-full border border-solid border-transparent hover:border-dark dark:hover:border-light p-1 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="fill-dark dark:fill-light" />
          </motion.a>

          <motion.a
            href=""
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3 rounded-full border border-solid border-transparent hover:border-dark dark:hover:border-light p-1 transition-colors"
            aria-label="Pinterest"
          >
            <PinterestIcon className="fill-dark dark:fill-light" />
          </motion.a>

          <motion.a
            href=""
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3 rounded-full border border-solid border-transparent hover:border-dark dark:hover:border-light p-1 transition-colors"
            aria-label="Dribbble"
          >
            <DribbbleIcon className="fill-dark dark:fill-light" />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
              ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            aria-label="Toggle theme"
          >
            {mode === "dark" ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu - Visible on lg and below */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 sm:py-24 xs:py-20'
        >
          <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink href="/" title='Home' className='text-2xl sm:text-xl xs:text-lg' toggle={handleClick} />
            <CustomMobileLink href="/about" title='About' className='text-2xl sm:text-xl xs:text-lg' toggle={handleClick} />
            <CustomMobileLink href="/projects" title='Projects' className='text-2xl sm:text-xl xs:text-lg' toggle={handleClick} />
            <CustomMobileLink href="/articles" title='Articles' className='text-2xl sm:text-xl xs:text-lg' toggle={handleClick} />
          </nav>

          <nav className='flex items-center justify-center flex-wrap mt-8 sm:mt-6 xs:mt-4'>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-2 xs:mx-1 sm:w-5 xs:w-5"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </motion.a>

            <motion.a
              href=""
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-2 xs:mx-1 sm:w-5 xs:w-5"
              aria-label="GitHub"
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              href=""
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-2 xs:mx-1 sm:w-5 xs:w-5"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href=""
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-2 xs:mx-1 sm:w-5 xs:w-5"
              aria-label="Pinterest"
            >
              <PinterestIcon />
            </motion.a>

            <motion.a
              href=""
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-2 xs:mx-1 sm:w-5 xs:w-5"
              aria-label="Dribbble"
            >
              <DribbbleIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 w-6 h-6 sm:w-5 sm:h-5 xs:w-5 xs:h-5 sm:ml-2 xs:ml-1
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
              aria-label="Toggle theme"
            >
              {mode === "dark" ? (
                <SunIcon className={'fill-dark'} />
              ) : (
                <MoonIcon className={'fill-dark'} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      {/* Logo - Responsive positioning */}
      <div className='absolute left-[50%] top-2 translate-x-[-50%] md:left-auto md:right-4 md:translate-x-0 sm:left-[50%] sm:translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar