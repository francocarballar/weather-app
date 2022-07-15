import React, { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from '../NavBar'
import { CardDays } from '../CardDays'
import { CardFeatures } from '../CardFeatures'

function App () {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const f = new Date()
  const day = days[f.getDay()]
  const date = f.getDate()
  const month = months[f.getMonth()]
  const [stateTomorrow, setTomorrow] = useState(days[f.getDay() + 1])
  const [stateDayAfterTomorrow, setDayAfterTomorrow] = useState(
    days[f.getDay() + 2]
  )
  const lastDay = () => {
    if (stateTomorrow === undefined) {
      setTomorrow(days[0])
    }
    if (stateDayAfterTomorrow === undefined) {
      setDayAfterTomorrow(days[0])
    }
  }
  lastDay()
  const today = `${day}, ${date} ${month}`
  const tomorrow = `${stateTomorrow}, ${date + 1} ${month}`
  const dayAfterTomorrow = `${stateDayAfterTomorrow}, ${date + 2} ${month}`
  const api_Key = 'a46af953702c497ab6022616221507'
  const request_URL = 'http://api.weatherapi.com/v1/'
  const IP = `${request_URL}ip.json?key=${api_Key}&q=auto:ip`
  const [city, setCity] = useState('')
  const yourCity = async () => {
    try {
      const response = await fetch(IP)
      const data = await response.json()
      if (response.status === 200) {
        setCity(data.city)
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    yourCity()
  }, [])
  const URL = `${request_URL}current.json?key=${api_Key}&q=${city}`
  const [temperature, setTemperature] = useState('')
  const [conditionIcon, setConditionIcon] = useState('')
  const [conditionText, setConditionText] = useState('')
  const [location, setLocation] = useState('')
  const [humidity, setHumidity] = useState('')
  const [windStatus, setWindStatus] = useState('')
  const [pressure, setPressure] = useState('')
  const [visibility, setVisibility] = useState('')
  const api = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      if (response.status === 200) {
        setTemperature(data.current.temp_c)
        setLocation(data.location.name)
        setHumidity(data.current.humidity)
        setWindStatus(data.current.wind_mph)
        setPressure(data.current.pressure_mb)
        setVisibility(data.current.vis_miles)
        setConditionText(data.current.condition.text)
        switch (data.current.condition.text) {
          case 'Sunny':
            setConditionIcon('/media/Clear.png')
            break
          case 'Light rain':
            setConditionIcon('/media/LightRain.png')
            break
          case 'Light drizzle':
            setConditionIcon('/media/LightRain.png')
            break
          case 'Partly cloudy':
            setConditionIcon('/media/LightCloud.png')
            break
          case 'Overcast':
            setConditionIcon('/media/HeavyCloud.png')
            break
          case 'Heavy snow':
            setConditionIcon('/media/Snow.png')
            break
          case 'Cloudy':
            setConditionIcon('/media/HeavyCloud.png')
            break
          case 'Moderate rain':
            setConditionIcon('/media/LightRain.png')
            break
          case 'Mist':
            setConditionIcon('/media/Mist.png')
            break
          case 'Patchy rain possible':
            setConditionIcon('/media/LightRain.png')
            break
            dafault: setConditionIcon('/media/Clear.png')
            break
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  api()
  const [minTempDay1, setMinTempDay1] = useState('')
  const [maxTempDay1, setMaxTempDay1] = useState('')
  const [conditionText1, setConditionText1] = useState('')
  const [conditionIcon1, setConditionIcon1] = useState('')
  const [minTempDay2, setMinTempDay2] = useState('')
  const [maxTempDay2, setMaxTempDay2] = useState('')
  const [conditionText2, setConditionText2] = useState('')
  const [conditionIcon2, setConditionIcon2] = useState('')
  const [minTempDay3, setMinTempDay3] = useState('')
  const [maxTempDay3, setMaxTempDay3] = useState('')
  const [conditionText3, setConditionText3] = useState('')
  const [conditionIcon3, setConditionIcon3] = useState('')
  const forecast = async () => {
    try {
      const response = await fetch(
        `${request_URL}forecast.json?key=${api_Key}&q=${city}&days=3`
      )
      const data = await response.json()
      if (response.status === 200) {
        const day1 = data.forecast.forecastday[0]
        const day2 = data.forecast.forecastday[1]
        const day3 = data.forecast.forecastday[2]
        setMaxTempDay1(day1.day.maxtemp_c)
        setMinTempDay1(day1.day.mintemp_c)
        setConditionText1(day1.day.condition.text)
        setMaxTempDay2(day2.day.maxtemp_c)
        setMinTempDay2(day2.day.mintemp_c)
        setConditionText2(day2.day.condition.text)
        setMaxTempDay3(day3.day.maxtemp_c)
        setMinTempDay3(day3.day.mintemp_c)
        setConditionText3(day3.day.condition.text)
        switch (conditionText1) {
          case 'Sunny':
            setConditionIcon1('/media/Clear.png')
            break
          case 'Light rain':
            setConditionIcon1('/media/LightRain.png')
            break
          case 'Light drizzle':
            setConditionIcon1('/media/LightRain.png')
            break
          case 'Partly cloudy':
            setConditionIcon1('/media/LightCloud.png')
            break
          case 'Overcast':
            setConditionIcon1('/media/HeavyCloud.png')
            break
          case 'Heavy snow':
            setConditionIcon1('/media/Snow.png')
            break
          case 'Cloudy':
            setConditionIcon1('/media/HeavyCloud.png')
            break
          case 'Moderate rain':
            setConditionIcon1('/media/LightRain.png')
            break
          case 'Mist':
            setConditionIcon1('/media/Mist.png')
            break
          case 'Patchy rain possible':
            setConditionIcon1('/media/LightRain.png')
            break
            dafault: setConditionIcon1('/media/Clear.png')
            break
        }
        switch (conditionText2) {
          case 'Sunny':
            setConditionIcon2('/media/Clear.png')
            break
          case 'Light rain':
            setConditionIcon2('/media/LightRain.png')
            break
          case 'Light drizzle':
            setConditionIcon2('/media/LightRain.png')
            break
          case 'Partly cloudy':
            setConditionIcon2('/media/LightCloud.png')
            break
          case 'Overcast':
            setConditionIcon2('/media/HeavyCloud.png')
            break
          case 'Heavy snow':
            setConditionIcon2('/media/Snow.png')
            break
          case 'Cloudy':
            setConditionIcon2('/media/HeavyCloud.png')
            break
          case 'Moderate rain':
            setConditionIcon2('/media/LightRain.png')
            break
          case 'Mist':
            setConditionIcon2('/media/Mist.png')
            break
          case 'Patchy rain possible':
            setConditionIcon2('/media/LightRain.png')
            break
            dafault: setConditionIcon2('/media/Clear.png')
            break
        }
        switch (conditionText3) {
          case 'Sunny':
            setConditionIcon3('/media/Clear.png')
            break
          case 'Light rain':
            setConditionIcon3('/media/LightRain.png')
            break
          case 'Light drizzle':
            setConditionIcon3('/media/LightRain.png')
            break
          case 'Partly cloudy':
            setConditionIcon3('/media/LightCloud.png')
            break
          case 'Overcast':
            setConditionIcon3('/media/HeavyCloud.png')
            break
          case 'Heavy snow':
            setConditionIcon3('/media/Snow.png')
            break
          case 'Cloudy':
            setConditionIcon3('/media/HeavyCloud.png')
            break
          case 'Moderate rain':
            setConditionIcon3('/media/LightRain.png')
            break
          case 'Mist':
            setConditionIcon3('/media/Mist.png')
            break
          case 'Patchy rain possible':
            setConditionIcon3('/media/LightRain.png')
            break
            dafault: setConditionIcon3('/media/Clear.png')
            break
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  forecast()
  const [navBar, setNavBar] = useState(false)
  const clickSearchPlaces = () => {
    setNavBar(true)
    document.body.style.overflow = 'hidden'
  }
  return (
    <main className='main'>
      {navBar && (
        <NavBar
          navBar={navBar}
          setNavBar={setNavBar}
          city={city}
          setCity={setCity}
        />
      )}
      <section className='section__main'>
        <nav className='nav'>
          <button
            type='button'
            className='search-for-places'
            onClick={clickSearchPlaces}
          >
            Search for places
          </button>
          <button type='button' className='my-location' onClick={yourCity}>
            <span className='material-symbols-outlined'>my_location</span>
          </button>
        </nav>
        <div className='bg-image'>
          <figure>
            <img src={conditionIcon}></img>
          </figure>
        </div>
        <h1 className='temperature'>
          {temperature}
          <span>°C</span>
        </h1>
        <h2 className='weather-conditions'>{conditionText}</h2>
        <div className='date-info'>
          <p>{today}</p>
        </div>
        <div className='location'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z' />
          </svg>
          <p>{location}</p>
        </div>
      </section>
      <section className='section__secondary'>
        <div className='container-days'>
          <CardDays
            date={today}
            weather_image={conditionIcon1}
            alt__weather_image={conditionText1}
            max_temperature={maxTempDay1}
            min_temperature={minTempDay1}
          />
          <CardDays
            date={tomorrow}
            weather_image={conditionIcon2}
            alt__weather_image={conditionText2}
            max_temperature={maxTempDay2}
            min_temperature={minTempDay2}
          />
          <CardDays
            date={dayAfterTomorrow}
            weather_image={conditionIcon3}
            alt__weather_image={conditionText3}
            max_temperature={maxTempDay3}
            min_temperature={minTempDay3}
          />
        </div>
        <h3>Today's Hightlights</h3>
        <div className='container-features'>
          <CardFeatures
            title='Wind Status'
            data={windStatus}
            measurement='mph'
          />
          <CardFeatures title='Humidity' data={humidity} measurement='%' />
          <CardFeatures
            title='Visibility'
            data={visibility}
            measurement='miles'
          />
          <CardFeatures title='Air Pressure' data={pressure} measurement='mb' />
        </div>
      </section>
    </main>
  )
}

export default App
