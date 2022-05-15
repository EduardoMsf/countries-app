import { useState } from 'react'

  const getDataDetails = async (country) =>{
    const [ countryDetails, setCountryDetails] = useState([])
    const API = `https://restcountries.com/v3.1/name/${country}`;
    try{
      const response = await fetch(API)
      const data = await response.json()
      setCountryDetails(data)
    }catch(error){
      console.log(error)
    }   
    
  }

  export default getDataDetails