
import { useState, useEffect } from 'react'

import { Persons } from './components/Persons'
import { PersonForm } from './components/PersonForm'
import { Finder } from './components/Finder'
import { Notification } from './components/Notification'
import { Errormessage } from './components/Errormessage'
import personService from './services/personService'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchItem, setFinder] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [message, setMessage] = useState(null)
  
  



  useEffect(() => {
    
    personService
      .getAll()
      .then(response => {
        
        setPersons(response.data)
        
      })
  }, [])
  
  
       const changeNumber = (id) => {
        
          const person = persons.find(p => p.id === id)
          console.log(person.name)
          const changedNumber = { ...person, number: newNumber }
          console.log(changedNumber)
          
        
          personService
            .update(id, changedNumber)
            .then(response => {
              
              
              setPersons(persons.map(p => p.id !== id ? p : response.data))
              setMessage(`person ${person.name} number was changed.`)
              setTimeout(() => {
                setMessage(null)
              }, 3000) 
            
              
            })
            
            
            .catch(error => {
              setErrorMessage(
                `the person ${person.name} was already deleted from server`
              )
              setPersons(persons.filter(p => p.id !== id))
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
              
            })
            setNewName('')
            setNewNumber('')
          
          }

  
  
  const addName = (event) => {
    event.preventDefault()
    
    if (persons.some(person => person.name === newName)) {
      
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        
        const person = persons.find(p => p.name === newName)
        
        changeNumber(person.id)   
            
            
            
            
        }
      
    else
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
      setMessage(`Added ${personObject.name}`)
    setTimeout(() => {
      setMessage(null)
    }, 3000)
      
    })
    .catch(error => {
     
  
      
      setErrorMessage(error.response.data.error)
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    })
    setNewName('')
    setNewNumber('')
    
    
  }
 
 
  const handleFinder = (event) => {
    console.log(event.target.value)
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
    
    if (window.confirm(`Delete ${name}?`)) { 
      personService
      .destroy(id)
      .then(setPersons(persons.filter(p => p.id !== id)))
      
      setMessage(`Deleted ${name}`)
     
    setTimeout(() => {
      setMessage(null)
      
    }, 3000)
    
  
    }
  
    
  }
  

  
 

  return (
    <div>
      <h2>Phonebook</h2>
      <Errormessage message={errorMessage}/>
      <Notification message={message}/>
      <Finder handleFinder={handleFinder}/>
      <h3>add a new</h3>
      <PersonForm addName={addName} newName={newName} handleNewPerson={handleNewPerson} newNumber={newNumber} handleNewNumber={handleNewNumber}/>
      <h2>Numbers</h2>
      
      <Persons persons={persons} searchItem={searchItem} handleDelete={handleDelete}/>
      
      
    </div>
  )

}

export default App
