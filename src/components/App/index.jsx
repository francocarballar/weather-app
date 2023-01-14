import React, { useContext, useEffect } from 'react'
import './App.css'
import { Context } from '../../context'
import { useAPI } from '../../hooks/useAPI'
import { useDate } from '../../hooks/useDate'
import { ErrorGeolocation } from '../ErrorGeolocation'
import { NavBar } from '../NavBar'
import { CardDays } from '../CardDays'
import { CardFeatures } from '../CardFeatures'
import { configAPI } from '../../utils/configAPI'
import { SectionMain } from '../SectionMain'

function App () {
  const {
    loading,
    url,
    urlDays,
    city,
    windStatus,
    humidity,
    visibility,
    pressure,
    tomorrow,
    dayAfterTomorrow,
    minTempDay1,
    maxTempDay1,
    conditionText1,
    conditionIcon1,
    minTempDay2,
    maxTempDay2,
    conditionText2,
    conditionIcon2,
    minTempDay3,
    maxTempDay3,
    conditionText3,
    conditionIcon3,
    errorGeolocation,
    navBar
  } = useContext(Context)
  const { api, forecast } = useAPI()
  configAPI()
  useEffect(() => {
    if (city !== '') {
      api(url)
      forecast(urlDays)
    }
  }, [url])

  const { day, date, month } = useDate()
  const Today = `${day}, ${date} ${month}`
  const Tomorrow = `${tomorrow}, ${date + 1} ${month}`
  const DayAfterTomorrow = `${dayAfterTomorrow}, ${date + 2} ${month}`
  return (
    <main className='main'>
      {errorGeolocation && <ErrorGeolocation />}
      {navBar && <NavBar />}
      <SectionMain today={Today} />
      <section className='section__secondary'>
        <div className='container-days'>
          <CardDays
            date={Today}
            weatherImage={conditionIcon1}
            altWeatherImage={conditionText1}
            maxTemperature={maxTempDay1}
            minTemperature={minTempDay1}
            loading={loading}
          />
          <CardDays
            date={Tomorrow}
            weatherImage={conditionIcon2}
            altWeatherImage={conditionText2}
            maxTemperature={maxTempDay2}
            minTemperature={minTempDay2}
            loading={loading}
          />
          <CardDays
            date={DayAfterTomorrow}
            weatherImage={conditionIcon3}
            altWeatherImage={conditionText3}
            maxTemperature={maxTempDay3}
            minTemperature={minTempDay3}
            loading={loading}
          />
        </div>
        <h3>Today&apos;s Hightlights</h3>
        <div className='container-features'>
          <CardFeatures
            title='Wind Status'
            data={windStatus}
            measurement='mph'
            loading={loading}
          />
          <CardFeatures
            title='Humidity'
            data={humidity}
            measurement='%'
            loading={loading}
          />
          <CardFeatures
            title='Visibility'
            data={visibility}
            measurement='miles'
            loading={loading}
          />
          <CardFeatures
            title='Air Pressure'
            data={pressure}
            measurement='mb'
            loading={loading}
          />
        </div>
      </section>
    </main>
  )
}

export default App
