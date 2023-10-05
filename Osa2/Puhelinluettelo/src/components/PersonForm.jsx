export const PersonForm = (props) => {
  return (
    <>
      
      <form onSubmit={props.addName} >
        <div>
          name: <input
            value={props.newName}
            onChange={props.handleNewPerson} />
        </div>
        <div>
          number: <input
            value={props.newNumber}
            onChange={props.handleNewNumber} />
        </div>
        <div>
          <button onClick={props.handleFinder} type="submit">add</button>
        </div>
      </form>
    </>
  );
};
