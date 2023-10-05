
export const Persons = (props) => {
    const filteredPersons = props.persons.filter((person) =>
    person.name.toLowerCase().includes(props.searchItem.toLowerCase())
    );
    return(
      <>
    <div>{filteredPersons.map(person => <ul key={person.name}>{person.name} {person.number}</ul>)}</div>
    </>
    )
};
  