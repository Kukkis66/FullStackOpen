
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Persons } from './components/Persons'
import { PersonForm } from './components/PersonForm'
import { Finder } from './components/Finder'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchItem, setFinder] = useState('')
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        
      })
  }, [])
  console.log('render', persons.length, 'persons')
  
  
  const addName = (event) => {
    event.preventDefault()
    
    if (persons.some(person => person.name === newName)) {
      alert(`${newName}" is already added to phonebook`)
      setNewName('')
      return
    }
    
    const personObject = {
      name : newName,
      number : newNumber
    }
    
    axios
    .post('http://localhost:3001/persons', personObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      console.log(response)
    })
    setNewName('')
    setNewNumber('')
    
  }
 
 
  const handleFinder = (event) => {
  
  
  const searchTerm = event.target.value
    setFinder(searchTerm)
  
  }
 
 
  const handleNewPerson = (event) => {
    
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    
    setNewNumber(event.target.value)
  }



 
 

  return (
    <div>
      <h2>Phonebook</h2>
      <Finder handleFinder={handleFinder}/>
      <h3>add a new</h3>
      <PersonForm addName={addName} newName={newName} handleNewPerson={handleNewPerson} newNumber={newNumber} handleNewNumber={handleNewNumber}/>
      <h2>Numbers</h2>
      
      <Persons persons={persons} searchItem={searchItem} />
      
    </div>
  )

}

export default App
