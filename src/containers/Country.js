import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import Search from '../components/Search';
import getDataDetails from '../utils/getDataByCountry'

const Country = () => {
  const { country } = useParams();
  const [countryDetail, setCountryDetail] = useState([])
    
  useEffect(() => {
    getData(country)
  }, [])
    
  const getData = async (nameCountry) =>{
    const API = `https://restcountries.com/v3.1/name/${nameCountry}`;
    try{
      const response = await fetch(API)
      const data = await response.json()
      setCountryDetail(data)
    }catch(error){
      console.log(error)
    }   
  }

  return (
    <div>
      <div>
        <Search />
        <Link to='/'>Heyheyhey</Link>
      </div>
      {countryDetail.map( datos =>(
        <div className='countryCard'>
          <div className='countryCard-img'>
            <img src={datos.flags.png} alt=''/>
          </div>
          <div>
            <h3>{datos.name.common}</h3>
            <p><span>Population: </span>{datos.population.toLocaleString('en-US')}</p>
            <p><span>Region: </span>{datos.region}</p>
            <p><span>Subregion: </span>{datos.subregion}</p>
            <p><span>Capital: </span>{datos.capital}</p>
            <p><span>Languages: </span>{datos.languages.spa}</p>
            <p><span>Top Level Domain: </span>{datos.tld}</p>
            <p><span>Borders: </span>{datos?.borders[0]} {datos?.borders[1]} {datos?.borders[2]}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Country
