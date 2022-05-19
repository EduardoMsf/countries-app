import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Search = () => {

  const [ searchedValue, setSearchedValue] = useState('');
  const [ data, setData] = useState([])

  const onToggleChange = e =>{
    setSearchedValue(e.target.value)
    //console.log('event', e.target.value)
  }
  useEffect(() => {
    getData();
  }, [])

  const getData = async () =>{
    const API = 'https://restcountries.com/v3.1/all';
    try{
      const response = await fetch(API)
      const datos = await response.json()
      setData(datos)
    }catch(error){
      console.log(error)
    }   
  }


  const matchSearch = (value) =>{
    //Esperaremos a hacer el match hasta que uncluyamos el context
    const results = data.filter(country => country.name.common.toLowerCase().includes(value))
    console.log(results)
    return results
  }

  matchSearch(searchedValue)
  
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