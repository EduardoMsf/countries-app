
  const getDataDetails = async (country) =>{
    const API = `https://restcountries.com/v3.1/name/${country}`;
    try{
      const response = await fetch(API)
      const data = await response.json()
      return data
    }catch(error){
      console.log(error)
    }   
    
  }

  export default getDataDetails