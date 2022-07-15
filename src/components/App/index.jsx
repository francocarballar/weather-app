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
  const today = `${day}, ${date} ${month}`
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
        if (data.current.condition.text === 'Sunny') {
          setConditionIcon('/media/Clear.png')
        }
        if (data.current.condition.text === 'Light rain') {
          setConditionIcon('/media/LightRain.png')
        }
        if (data.current.condition.text === 'Partly cloudy') {
          setConditionIcon('/media/LightCloud.png')
        }
        if (data.current.condition.text === 'Overcast') {
          setConditionIcon('/media/HeavyCloud.png')
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  api()
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
            date='Tomorrow'
            weather_image='/media/Sleet.png'
            alt__weather_image='sleet'
            max_temperature='16°c'
            min_temperature='11°C'
          />
          <CardDays
            date='Tomorrow'
            weather_image='/media/Sleet.png'
            alt__weather_image='sleet'
            max_temperature='16°c'
            min_temperature='11°C'
          />
          <CardDays
            date='Tomorrow'
            weather_image='/media/Sleet.png'
            alt__weather_image='sleet'
            max_temperature='16°c'
            min_temperature='11°C'
          />
          <CardDays
            date='Tomorrow'
            weather_image='/media/Sleet.png'
            alt__weather_image='sleet'
            max_temperature='16°c'
            min_temperature='11°C'
          />
          <CardDays
            date='Tomorrow'
            weather_image='/media/Sleet.png'
            alt__weather_image='sleet'
            max_temperature='16°c'
            min_temperature='11°C'
          />
          <CardDays
            date='Tomorrow'
            weather_image='/media/Sleet.png'
            alt__weather_image='sleet'
            max_temperature='16°c'
            min_temperature='11°C'
          />
          <CardDays
            date='Tomorrow'
            weather_image='/media/Sleet.png'
            alt__weather_image='sleet'
            max_temperature='16°c'
            min_temperature='11°C'
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
