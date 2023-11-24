import './style.css'
import { API_KEY } from './cred.js'
import domElements from './DOM-elements.js'

// create the variables needed to initialize
let userInput = 'sevilla'
let displayCelsius = true
let degreesUnit = '°C'
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

domElements.switchBtn.addEventListener('pointerdown', () => {
  displayCelsius = !displayCelsius
  degreesUnit = displayCelsius ? '°C' : '°F'
  domElements.switchBtn.innerText = `switch to ${degreesUnit}`
  getForecast()
})

async function getForecast () {
  const FORECAST_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${userInput}&days=4`

  try {
    const response = await fetch(FORECAST_URL)

    if (response.status === 200) {
      const data = await response.json()

      // create a variable that decides what unit to display
      const temperatureUnit = displayCelsius ? 'c' : 'f'

      // indicators that display degrees
      domElements.feelsLike.innerText = Math.round(data.current[`feelslike_${temperatureUnit}`]) + degreesUnit
      domElements.currentDegrees.innerText = Math.round(data.current[`temp_${temperatureUnit}`]) + degreesUnit
      domElements.todaysMax.innerText = 'Max: ' + Math.round(data.forecast.forecastday[0].day[`maxtemp_${temperatureUnit}`]) + degreesUnit
      domElements.todaysMin.innerText = 'Min: ' + Math.round(data.forecast.forecastday[0].day[`mintemp_${temperatureUnit}`]) + degreesUnit

      // left aside indicators
      domElements.humidity.innerText = data.current.humidity + ' %'
      domElements.rainChances.innerText = data.forecast.forecastday[0].day.daily_chance_of_rain
      domElements.windSpeed.innerText = Math.round(data.current.wind_kph) + ' km/h'
      domElements.uvIndex.innerText = data.forecast.forecastday[0].day.uv

      // set date & time in desired format
      const localTimeUnformatted = new Date(data.location.localtime)
      const localDateFormatted = `${localTimeUnformatted.getDate()}-${localTimeUnformatted.getMonth() + 1}-${localTimeUnformatted.getFullYear()}`
      const localTimeFormatted = `${localTimeUnformatted.getHours()}:${(localTimeUnformatted.getMinutes() < 10 ? '0' : '') + localTimeUnformatted.getMinutes()}`

      domElements.localDate.innerText = localDateFormatted
      domElements.localTime.innerText = localTimeFormatted

      // main indicators
      domElements.regionName.innerText = data.location.region
      domElements.cityName.innerText = data.location.name
      domElements.currentConditionIcon.src = data.current.condition.icon
      domElements.currentConditionText.innerText = data.current.condition.text
      domElements.todaysSunrise.innerText = 'Sunrise: ' + data.forecast.forecastday[0].astro.sunrise
      domElements.todaysSunset.innerText = 'Sunset: ' + data.forecast.forecastday[0].astro.sunset

      // right aside indicators
      domElements.switchBtn.innerText = `switch to ${displayCelsius ? '°F' : '°C'}`

      // create a variable for the next two days and display the day of the week for each of them
      const day1Date = new Date(`${data.forecast.forecastday[1].date}`)
      domElements.tomorrowTitle.innerText = weekdays[day1Date.getDay()]
      domElements.tomorrowConditionIcon.src = data.forecast.forecastday[1].day.condition.icon

      const dayTwoDate = new Date(`${data.forecast.forecastday[2].date}`)
      domElements.dayTwoTitle.innerText = weekdays[dayTwoDate.getDay()]
      domElements.dayTwoConditionIcon.src = data.forecast.forecastday[2].day.condition.icon

      // display the max & min temperatures for the next two days
      domElements.tomorrowMax.innerText = Math.round(data.forecast.forecastday[1].day[`maxtemp_${temperatureUnit}`]) + degreesUnit
      domElements.tomorrowMin.innerText = Math.round(data.forecast.forecastday[1].day[`mintemp_${temperatureUnit}`]) + degreesUnit
      domElements.dayTwoMax.innerText = Math.round(data.forecast.forecastday[2].day[`maxtemp_${temperatureUnit}`]) + degreesUnit
      domElements.dayTwoMin.innerText = Math.round(data.forecast.forecastday[2].day[`mintemp_${temperatureUnit}`]) + degreesUnit
    } else {
      console.log('There was a problem with the request.')
      alert('Please enter a valid location.')
    }
  } catch (error) {
    console.log('Error', error)
  }
}

domElements.searchbar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    userInput = domElements.searchbar.value
    getForecast()
    console.log('The search term was ' + userInput)
    domElements.searchbar.value = ''
  }
})

getForecast()
