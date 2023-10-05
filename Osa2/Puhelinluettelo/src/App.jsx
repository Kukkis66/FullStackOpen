import { Persons } from './components/Persons'
import { useState } from 'react'
import { PersonForm } from './components/PersonForm'
import { Finder } from './components/Finder'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
    
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchItem, setFinder] = useState('')
  
  
  
  
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
    
    setPersons([...persons, personObject])
    setNewName('')
    setNewNumber('')
    
  }
 
 
  const handleFinder = (event) => {
  
  console.log(event.target.value)
  const searchTerm = event.target.value
    setFinder(searchTerm)
  
   

  
  

 }
 
 
  const handleNewPerson = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    console.log(event.target.value)
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
