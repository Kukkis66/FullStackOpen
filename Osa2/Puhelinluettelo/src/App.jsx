import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
    
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewPerson = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name : newName
    }
    
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
        <div>
          name: <input
          value={newName}
          onChange={handleNewPerson}
          />
        </div>
        <div>
        <form onSubmit={addName} >
        
          <button type="submit"
          >add</button>
          </form>
        </div>
      
      <h2>Numbers</h2>
      <div>{persons.map(person => <ul>{person.name}</ul>)}</div>
    </div>
  )

}

export default App