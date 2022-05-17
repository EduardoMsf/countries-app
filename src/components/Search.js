import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Search = () => {

  const [ searchedValue, setSearchedValue] = useState('');
  const [ data, setData] = useState([])

  const onToggleChange = e =>{
    setSearchedValue(e.target.value)
    console.log('event', e.target.value)
  }
//   useEffect(() => {
//     console.log('state', searchedValue)
//   }, [searchedValue])

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

  const matchSearch = (value) =>{
    //Esperaremos a hacer el match hasta que uncluyamos el context
  }
  
  return (
    <div>
        <input type='text' label='Search for a country' onChange={onToggleChange}/>
        <Link to='/region/Asia'>Asia</Link>
        <Link to='/region/America'>America</Link>
        <Link to='/region/Africa'>Africa</Link>
        <Link to='/region/Europe'>Europa</Link>
        <Link to='/region/Oceania'>Oceania</Link>
    </div>
  )
}

export default Search