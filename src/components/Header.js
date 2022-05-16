import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <h3>Where in the world?</h3>
        <span>Dark Mode<i></i></span>
      </div>
      <div>
        <input type='text' label='Search for a country'/>
        <Link to='/region/Asia'>Asia</Link>
        <Link to='/region/America'>America</Link>
        <Link to='/region/Africa'>Africa</Link>
        <Link to='/region/Europe'>Europa</Link>
        <Link to='/region/Oceania'>Oceania</Link>
      </div>
    </div>
  )
}

export default Header
