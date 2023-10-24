import { useState, useEffect } from 'react'

import { Finder } from './components/Finder'
import { Countries } from './components/Countries'

import apiService from './services/apiService'


function App() {
  const [countries, setCountries] = useState([])
  const [searchField, setSearchField] = useState('')
  


  useEffect(() => {
        
      apiService
        .getAll()
        .then(response => {
          setCountries(response.data)
        })
      
  }, [searchField])

  const handleCountries = (event) =>
  {
    
    setSearchField(event.target.value)
  }

  const handleOne = (name) =>
  {

    apiService
      .getOne(name)
      .then(response => {
        
        setCountries([response.data])
      })

      
  }

  
  return (
    <>
      <div>
      <Finder handleCountries={handleCountries}/>
      <Countries  countries={countries} searchField={searchField} handleOne={handleOne} />
      </div>
        </>
  )
}

export default App
