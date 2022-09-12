import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='headerContainer-content box-shadow'>
        <Link to='/'>
          <h3>Where in the world?</h3>
        </Link>
        {/* <span>Dark Mode<i></i></span> */}
        <Search/>
      </div>
    </div>
  )
}

export default Header
