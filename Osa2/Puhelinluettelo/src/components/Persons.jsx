
export const Persons = (props) => {
    const filteredPersons = props.persons.filter((person) =>
    person.name.includes(props.searchItem)
    );
    
    
    
    return(
      <>
      
    <div>{filteredPersons.map(person => <ul key={person.name}>{person.name} {person.number}  <button onClick={() => props.handleDelete(person.id,person.name)} type="button">delete</button> </ul>)}</div>
    </>
    )
};
  