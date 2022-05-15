//   fetch('https://restcountries.com/v3.1/name/mexico')
//     .then(res => res.json())
//     .then(data => data.map( item => console.log(item.capital)))
// const [countries, setCountries] = useState([])
// useEffect(() => {
//   getData()
// }, [])

//   const getData = async () =>{
//     const API = 'https://restcountries.com/v3.1/name/mexico';
//     try{
//       const response = await fetch(API)
//       const data = await response.json()
//       setCountries(data)
//     }catch(error){
//       console.log(error)
//     }   
//   }

//   countries.map(country => console.log(country.capital))