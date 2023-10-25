import { useEffect } from "react";

export const Countries = (props) => {
    
    const countryList = props.countries.filter((country) =>
    String(country.name.common).toLowerCase().includes(props.searchField.toLowerCase())
    );

    
    

    if (countryList.length >= 10) {
        
        return(
        <>
        <div>Too many matches,specify another filter</div>
        </>
        )
      }
    
    else if(countryList.length === 1) {
        useEffect(() => {
            props.handleCoordinates(countryList.map(country => country.latlng))
            props.handleFilteredCountries(countryList)
          
        }, [])
        
        
        
        
        return(
            
            <>
            
          <div>
            {countryList.map(country =>
            <div key={country.name.common}>
                <h1>{country.name.common}</h1>
                <div>capital {country.capital}</div>
                <div>area {country.area}</div>
                <h2>languages:</h2>
                <ul>
                    {Object.values(country.languages).map(language => <li key={language}>
                        {language}
                    </li>
                    )}
                </ul>
                <img src={country.flags.png}></img>
            </div>
            )} 
          </div>
          
          </>
          )
    }
    
    else
    return(
    <>
      
    <div>
        {countryList.map(country =>
        <ul key={country.name.common}>{country.name.common}
        <button onClick={() => props.handleOne(country.name.common)} type="button">show
        </button>
        </ul>
        )}
    </div>
    </>
    )
}