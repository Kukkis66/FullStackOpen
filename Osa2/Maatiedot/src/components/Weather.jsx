export const Weather = (props) => {
    if (props.weather){
    
    if (props.filteredList.length === 1) {
    
    return(
    <>
    
    <div>
        
        {props.weather.map(weather => <div key={weather.name}><h2>Weather in {weather.name}</h2>temperature {weather.main.temp} Celcius <figure><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img></figure>wind {weather.wind.speed} m/s</div>)}
        
    </div>
    </>
    )
    
    }
    else
    return(
        <>
        </>
    )
    }
}