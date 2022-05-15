import React from 'react'
import '../styles/App.css'

const CountryCard = ({ country }) => {
  return (
    <div className='countryCard'>
      <div className='countryCard-img'>
        <img src={country.flags.png} alt=''/>
      </div>
      <div>
        <h3>{country.name.common}</h3>
        <p><span>Population: </span>{country.population}</p>
        <p><span>Region: </span>{country.region}</p>
        <p><span>Capital: </span>{country.capital}</p>
      </div>
    </div>
  )
}

export default CountryCard
