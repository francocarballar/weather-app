import { useContext } from 'react'
import { useSwitchConditionIcon } from './useSwitchConditionIcon'
import { Context } from '../context'

function useAPI () {
  const {
    setTemperature,
    setConditionIcon,
    setConditionText,
    setLocation,
    setHumidity,
    setWindStatus,
    setPressure,
    setVisibility,
    setMaxTempDay1,
    setMinTempDay1,
    setConditionText1,
    setConditionIcon1,
    setMaxTempDay2,
    setMinTempDay2,
    setConditionText2,
    setConditionIcon2,
    setMaxTempDay3,
    setMinTempDay3,
    setConditionText3,
    setConditionIcon3,
    setLoading
  } = useContext(Context)

  const api = async url => {
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Llamada a la API: ', data)
        setTemperature(data.current.temp_c)
        setLocation(data.location.name)
        setHumidity(data.current.humidity)
        setWindStatus(data.current.wind_mph)
        setPressure(data.current.pressure_mb)
        setVisibility(data.current.vis_miles)
        setConditionText(data.current.condition.text)
        useSwitchConditionIcon(data.current.condition.text, setConditionIcon)
        setLoading(false)
      })
      .catch(e => console.error(e))
  }

  const resultsSearch = async searchUrl => {
    const containerSearch = document.querySelector('.container_search')
    const ul = document.createElement('ul')
    await fetch(searchUrl)
      .then(res => res.json())
      .then(data => {
        const ulContainerSearch = document.querySelectorAll(
          '.container_search ul'
        )
        data.forEach(d => {
          const coor = `${d.lat}, ${d.lon}`
          const elem = document.createElement('li')
          elem.appendChild(document.createTextNode(d.name))
          elem.setAttribute('data-coor', coor)
          ul.appendChild(elem)
          containerSearch.appendChild(ul)
        })
        ulContainerSearch.forEach(function (node) {
          containerSearch.removeChild(node)
        })
      })
      .catch(e => console.error(e))
  }

  const forecast = async urlDays => {
    await fetch(urlDays)
      .then(res => res.json())
      .then(data => {
        const day1 = data.forecast.forecastday[0]
        const day2 = data.forecast.forecastday[1]
        const day3 = data.forecast.forecastday[2]
        setMaxTempDay1(day1.day.maxtemp_c)
        setMinTempDay1(day1.day.mintemp_c)
        setConditionText1(day1.day.condition.text)
        useSwitchConditionIcon(day1.day.condition.text, setConditionIcon1)
        setMaxTempDay2(day2.day.maxtemp_c)
        setMinTempDay2(day2.day.mintemp_c)
        setConditionText2(day2.day.condition.text)
        useSwitchConditionIcon(day2.day.condition.text, setConditionIcon2)
        setMaxTempDay3(day3.day.maxtemp_c)
        setMinTempDay3(day3.day.mintemp_c)
        setConditionText3(day3.day.condition.text)
        useSwitchConditionIcon(day3.day.condition.text, setConditionIcon3)
      })
      .catch(e => console.error(e))
  }

  return { api, resultsSearch, forecast }
}

export { useAPI }
