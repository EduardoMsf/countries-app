import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
        <h3>Where in the world?</h3>
        <span>Dark Mode<i></i></span>
      </div>
      <div>
        <input type='text' label='Search for a country'/>
        <span>Filter by region</span>
      </div>
    </div>
  )
}

export default Header
