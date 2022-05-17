import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <div>
        <input type='text' label='Search for a country'/>
        <Link to='/region/Asia'>Asia</Link>
        <Link to='/region/America'>America</Link>
        <Link to='/region/Africa'>Africa</Link>
        <Link to='/region/Europe'>Europa</Link>
        <Link to='/region/Oceania'>Oceania</Link>
    </div>
  )
}

export default Search