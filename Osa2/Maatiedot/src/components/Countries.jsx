export const Countries = (props) => {
    
    const countryList = props.countries.filter((country) =>
    String(country.name.common).toLowerCase().includes(props.searchField.toLowerCase())
    );

    
    
    if (countryList.length >= 10) {
        return(
            <>
            
          <div>Too many marches,specify another filter</div>
          </>
          )
      }
    
    else if(countryList.length == 1) {
        return(
            <>
            
          <div>{countryList.map(country => <div key={country.name.common}><h1>{country.name.common}</h1> <div>capital {country.capital}</div> <div>area {country.area}</div> <h2>languages:</h2> <ul>{Object.values(country.languages).map(language => <li>{language}</li>)}</ul> <img src={country.flags.png}></img></div>)
          } </div>
          </>
          )
    }
    
    else
    return(
      <>
      
    <div>{countryList.map(country => <ul key={country.name.common}>{country.name.common} </ul>)}</div>
    </>
    )
}