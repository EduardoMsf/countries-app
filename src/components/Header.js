import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='headerContainer-content box-shadow'>
        <Link to='/'>
          <h3>Where in the world?</h3>
        </Link>
      </div>
    </div>
  )
}

export default Header
