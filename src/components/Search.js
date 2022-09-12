import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import CountryCard from './CountryCard'

const Search = () => {

  const [ searchedValue, setSearchedValue] = useState('');
  const [ data, setData] = useState([])
  const [ filteredData, setFilteredData] = useState([])
  const [ valueSelect, setValueSelect] = useState('')
  const selectRef = useRef('')

  const onToggleChange = e =>{
    setSearchedValue(e.target.value.toLowerCase())
    //console.log('event', e.target.value)
  }
  useEffect(() => {
    getData();
  }, [searchedValue])

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
    //console.log(results)
    //setFilteredData(results)
    return results
  }

  useEffect(() => {
    setFilteredData(matchSearch(searchedValue))
    console.log(filteredData)
  }, [searchedValue])
  

  const handleValueSelect = (e) => {
    e.preventDefault()
    setValueSelect(e.target.value)
  }

  
  console.log(valueSelect)
  return (
    <div className=''>
      <div className='searchContainer'>
        <input type='text' label='Search for a country' placeholder='Search for a country' onChange={onToggleChange}/>
        <select value={valueSelect} name="select" onChange={handleValueSelect} onClick={()=>selectRef.current.click()}>
          <option value='' disabled>Selecciona una region</option>
          <option value="/region/Asia">Asia</option>
          <option value="/region/America">America</option>
          <option value="/region/Africa">Africa</option>
          <option value="/region/Europe">Europe</option>
          <option value="/region/Oceania">Oceania</option>
        </select>
        <Link style={{display:'none'}} ref={selectRef}  to={valueSelect}/>
      </div>
      <div className='countryList-container'>
      {filteredData.length == 0 ? '' :
        filteredData.map(country =>(
          <CountryCard country={country} />
        ))
        }
      </div>
    </div>
  )
}

export default Search