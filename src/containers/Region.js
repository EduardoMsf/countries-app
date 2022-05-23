import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import CountryCard from '../components/CountryCard'
import Search from '../components/Search';

const Region = () => {
  const { region } = useParams();
  const [regionDetail, setRegion] = useState([])
    
  useEffect(() => {
    getData(region)
  }, [region])
    
  const getData = async (nameRegion) =>{
    const API = `https://restcountries.com/v3.1/region/${nameRegion}`;
    try{
      const response = await fetch(API)
      const data = await response.json()
      setRegion(data)
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
      <div className='country-list-container'>
        {regionDetail.map( countries =>(
          <CountryCard country={countries} />
        ))}
      </div>
    </div>
  )
}

export default Region

