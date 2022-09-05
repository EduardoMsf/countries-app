import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Header = () => {
  return (
    <div>
      <div>
        <h3>Where in the world?</h3>
        <span>Dark Mode<i></i></span>
        <Search/>
      </div>
    </div>
  )
}

export default Header
