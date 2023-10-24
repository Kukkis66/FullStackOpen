export const Finder = (props) => {
    return (
        <>
        <form>
        <div>find countries 
          <input 
            onChange={props.handleCountries}
          />
        </div>
      </form>
        </>
    )
}