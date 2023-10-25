import { useState, useEffect } from 'react'

import { Finder } from './components/Finder'
import { Countries } from './components/Countries'
import { Weather } from './components/Weather'

import apiService from './services/apiService'


function App() {
  const [countries, setCountries] = useState([])
  const [searchField, setSearchField] = useState('')
  const [weather, setWeather] = useState(null)
  const [coordinates, setCoordinates] = useState(null)
  const [filteredList, setFilteredList] = useState(null)

  
  useEffect(() => {
        
      apiService
        .getAll()
        .then(response => {
          setCountries(response.data)
        })
      
      
  }, [searchField])


 useEffect(() => {
  if(coordinates){
    handleWeather(coordinates)
    }
   
 }, [coordinates])
 



  const handleCountries = (event) =>
  {
    
    setSearchField(event.target.value)
    setFilteredList([])
  }



  const handleOne = (name) =>
  {
    
    apiService
      .getOne(name)
      .then(response => {
        
        setCountries([response.data])
      })

      
  }

  const handleFilteredCountries = (countrylist) =>
  {
    setFilteredList(countrylist)
  }

  const handleCoordinates = (coordinates) =>{
    setCoordinates(coordinates)
  }


  const handleWeather = (coordinates) =>
  {
    
    apiService
      .getWeather(coordinates[0][0], coordinates[0][1])
      .then(response => {
        
        setWeather([response.data])
      })
  }


  
  return (
    <>
      <div>
      <Finder handleCountries={handleCountries}/>
      <Countries  countries={countries} searchField={searchField} handleOne={handleOne} handleCoordinates={handleCoordinates} handleFilteredCountries={handleFilteredCountries}  />
      <Weather weather={weather} countries={countries} filteredList={filteredList}  />
      </div>
        </>
  )
}

export default App
