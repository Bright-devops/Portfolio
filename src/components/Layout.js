import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 xl:p-24 lg:p-16 md:p-8 sm:p-4 xs:p-3 dark:bg-dark ${className}`}>
        {children}
    </div>
  )
}

export default Layout