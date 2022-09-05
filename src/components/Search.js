import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Search = () => {

  const [ searchedValue, setSearchedValue] = useState('');
  const [ data, setData] = useState([])
  const [ valueSelect, setValueSelect] = useState('')
  const selectRef = useRef('')

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

  const handleValueSelect = (e) => {
    e.preventDefault()
    setValueSelect(e.target.value)
  }

  
  console.log(valueSelect)
  return (
    <div className='searchContainer'>
        <input type='text' label='Search for a country' onChange={onToggleChange}/>
        <select value={valueSelect} name="select" onChange={handleValueSelect} onClick={()=>selectRef.current.click()}>
          <option value='' disabled>Selecciona una region</option>
          <option value="/region/Asia">Asia</option>
          <option value="/region/America">America</option>
          <option value="/region/Africa">Africa</option>
          <option value="/region/Europe">Europe</option>
          <option value="/region/Oceania">Oceania</option>
        </select>
        <Link style={{display:'none'}} ref={selectRef}  to={valueSelect}>Variable</Link>
        {/* <Link style={{display:'none'}} to='/region/America'>America</Link>
        <Link style={{display:'none'}} to='/region/Africa'>Africa</Link>
        <Link style={{display:'none'}} to='/region/Europe'>Europa</Link>
        <Link style={{display:'none'}} to='/region/Oceania'>Oceania</Link> */}
    </div>
  )
}

export default Search