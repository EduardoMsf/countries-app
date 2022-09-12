import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({ country }) => {
  return (
    <div className='countryCard box-shadow'>
      <Link to={`/country/${country.name.common}`}>
        <div className='countryCard-img'>
          <img src={country.flags.png} alt=''/>
        </div>
        <div className='countryCard-content'>
          <h3>{country.name.common}</h3>
          <p><span>Population: </span>{country.population.toLocaleString('en-US')}</p>
          <p><span>Region: </span>{country.region}</p>
          <p><span>Capital: </span>{country.capital}</p>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard
