import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'
const apiKey = import.meta.env.VITE_SOME_KEY


const getAll = () => {
  console.log(`${baseUrl}/all`)
  return axios.get(`${baseUrl}/all`)
}


const getOne = (name) => {
    return axios.get(`${baseUrl}/name/${name}`)
  }

const getWeather = (lat, lon) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
}


  export default { 
    getAll: getAll,
    getOne: getOne,
    getWeather: getWeather
  }