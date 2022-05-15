import React, {useState, useEffect} from 'react'
import CountryCard from './CountryCard'

const countryTest = {
  capital: 'Montevideo'
}
const CountriesList = () => {
  
  const [countries, setCountries] = useState([])
    
  useEffect(() => {
    getData()
  }, [])
    
  const getData = async () =>{
    const API = 'https://restcountries.com/v3.1/all';
    try{
      const response = await fetch(API)
      const data = await response.json()
      setCountries(data)
    }catch(error){
      console.log(error)
    }   
  }
  countries.map(country=>console.log(country.capital))
  return (
    <div>
      <div>
      { countries.map(country =>(
            <CountryCard country={country} />
          ))
        }
      </div>
    </div>
  )
}


export default CountriesList
