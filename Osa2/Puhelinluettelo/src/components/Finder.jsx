export const Finder = (props) => {
    return (
        <>
        <form>
        <div>filter shown with
          <input 
            onChange={props.handleFinder}
          />
        </div>
      </form>
        </>
    )
}