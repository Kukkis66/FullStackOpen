
import { useState, useEffect } from 'react'

import { Persons } from './components/Persons'
import { PersonForm } from './components/PersonForm'
import { Finder } from './components/Finder'
import personService from './services/personService'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchItem, setFinder] = useState('')
  
  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
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
    
    personService
    .create(personObject)
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

  const handleDelete = (id, name) => {
    console.log(id + " deleted")
    if (window.confirm(`Delete ${name}?`)) {
      personService
      .destroy(id)
      .then(response => {
      console.log(response)})
      window.location.reload();
    }
    
  }
  

 
 

  return (
    <div>
      <h2>Phonebook</h2>
      <Finder handleFinder={handleFinder}/>
      <h3>add a new</h3>
      <PersonForm addName={addName} newName={newName} handleNewPerson={handleNewPerson} newNumber={newNumber} handleNewNumber={handleNewNumber}/>
      <h2>Numbers</h2>
      
      <Persons persons={persons} searchItem={searchItem} handleDelete={handleDelete} />
      
      
    </div>
  )

}

export default App
