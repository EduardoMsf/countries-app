
export const getData = async () =>{
    //const [ countries, setCountries] = useState([])
    const API = 'https://restcountries.com/v3.1/all';
    try{
      const response = await fetch(API)
      const data = await response.json()
      //setCountries(data)
      //console.log(data)
      return data
    }catch(error){
      console.log(error)
    }   
  }