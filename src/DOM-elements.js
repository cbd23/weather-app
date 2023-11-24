// create a variable for the searchbar
const searchbar = document.getElementById('searchbar')

// create a variable for each indicator from the aside.left element
const feelsLike = document.querySelector('.feels-like-degrees')
const humidity = document.querySelector('.humidity-percentage')
const rainChances = document.querySelector('.rain-chances-percentage')
const windSpeed = document.querySelector('.wind-speed-number')
const uvIndex = document.querySelector('.uv-index')
const localTime = document.querySelector('.local-time')
const localDate = document.querySelector('.local-date')

// create a variable for each indicator from the main element
const regionName = document.querySelector('.region')
const cityName = document.querySelector('.location-name')
const currentDegrees = document.querySelector('.location-degrees')
const currentConditionIcon = document.querySelector('.main-weather-icon')
const currentConditionText = document.querySelector('.main-weather-text')
const todaysMax = document.querySelector('.todays-max')
const todaysMin = document.querySelector('.todays-min')
const todaysSunrise = document.querySelector('.todays-sunrise')
const todaysSunset = document.querySelector('.todays-sunset')

// create a variable for each indicator from the aside.right element
const tomorrowTitle = document.querySelector('.tomorrow-title')
const tomorrowConditionIcon = document.querySelector('.tomorrow-icon')
const tomorrowMax = document.querySelector('.tomorrow-max')
const tomorrowMin = document.querySelector('.tomorrow-min')

const dayTwoTitle = document.querySelector('.day-two-title')
const dayTwoConditionIcon = document.querySelector('.day-two-icon')
const dayTwoMax = document.querySelector('.day-two-max')
const dayTwoMin = document.querySelector('.day-two-min')

// create a variable for the 'unit switch' btn
const switchBtn = document.querySelector('.switch-btn')

const domElements = {
  searchbar,
  feelsLike,
  humidity,
  rainChances,
  windSpeed,
  uvIndex,
  localTime,
  localDate,
  regionName,
  cityName,
  currentDegrees,
  currentConditionIcon,
  currentConditionText,
  todaysMax,
  todaysMin,
  todaysSunrise,
  todaysSunset,
  tomorrowTitle,
  tomorrowConditionIcon,
  tomorrowMax,
  tomorrowMin,
  dayTwoTitle,
  dayTwoConditionIcon,
  dayTwoMax,
  dayTwoMin,
  switchBtn
}

// Export the object
export default domElements
