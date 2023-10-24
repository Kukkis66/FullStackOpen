import { useState, useEffect } from 'react'

import { Finder } from './components/Finder'
import { Countries } from './components/Countries'

import apiService from './services/apiService'


function App() {
  const [countries, setCountries] = useState([])
  const [searchField, setSearchField] = useState('')


  useEffect(() => {
    console.log('Country count', countries.length)

    // skip if currency is not defined
    
      
      apiService
        .getAll()
        .then(response => {
          setCountries(response.data)
        })
      
  }, [])

  const handleCountries = (event) =>
  {
    setSearchField(event.target.value)
  }


  return (
    <>
      <div>
      <Finder handleCountries={handleCountries}/>
      
       <Countries  countries={countries} searchField={searchField} />
      </div>
        </>
  )
}

export default App
