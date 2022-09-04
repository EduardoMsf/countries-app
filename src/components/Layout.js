import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='animate__animated animate__fadeIn animate__faster'>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default Layout
