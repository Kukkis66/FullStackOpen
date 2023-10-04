import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
    
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  

  const handleNewPerson = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

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
    
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input
          value={newName}
          onChange={handleNewPerson}
          />
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNewNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        </form>
      <h2>Numbers</h2>
      <div>{persons.map(person => <ul key={person.name}>{person.name} {person.number}</ul>)}</div>
    </div>
  )

}

export default App
