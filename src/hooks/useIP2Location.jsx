import { useContext, useEffect } from 'react'
import { Context } from '../context'

function useIP2Location () {
  const { setCity } = useContext(Context)
  const options = {
    method: 'GET',
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
  const API_KEY = process.env.REACT_APP_API_KEY_IP2_LOCATION
  const URL_API = `https://api.ip2location.com/v2/?key=${API_KEY}&format=json&package=WS25&addon=continent%2Ccountry%2Cregion%2Ccity%2Cgeotargeting%2Ctime_zone_info`
  useEffect(() => {
    const myCity = async () => {
      fetch(URL_API, options)
        .then(res => res.json())
        .then(res => setCity(res.city.name))
        .catch(err => console.error(err))
    }
    myCity()
  }, [setCity, URL_API, API_KEY, options])
}

export { useIP2Location }
