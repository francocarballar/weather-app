import { useEffect, useContext, useCallback } from 'react'
import { Context } from '../context'

function configAPI () {
  const {
    city,
    setCity,
    setMyCity,
    search,
    setUrl,
    setSearchUrl,
    setUrlDays,
    setErrorGeolocation,
    loading,
    setLoading
  } = useContext(Context)

  const permissionStatus = useCallback(() => {
    navigator.permissions
      .query({ name: 'geolocation' })
      .then(permissionStatus => {
        if (permissionStatus.state === 'prompt') {
          setLoading(true)
        } else if (permissionStatus.state === 'denied') {
          setLoading(true)
        }
        permissionStatus.onchange = function () {
          if (permissionStatus.state === 'prompt') {
            setLoading(true)
          } else if (permissionStatus.state === 'denied') {
            setLoading(true)
          }
        }
      })
  }, [loading])

  const API_KEY = process.env.REACT_APP_API_KEY
  const REQUEST_URL = 'https://api.weatherapi.com/v1/'
  useEffect(() => {
    if ('geolocation' in navigator) {
      const success = position => {
        const lat = position.coords.latitude
        const long = position.coords.longitude
        if (city === '') {
          setCity(`${lat},${long}`)
          setMyCity(`${lat},${long}`)
          setUrl(`${REQUEST_URL}current.json?key=${API_KEY}&q=${lat},${long}`)
          setSearchUrl(
            `${REQUEST_URL}search.json?key=${API_KEY}&q=${lat},${long}`
          )
          setUrlDays(
            `${REQUEST_URL}forecast.json?key=${API_KEY}&q=${lat},${long}&days=3`
          )
          permissionStatus()
        }
      }

      const error = () => {
        setErrorGeolocation(true)
      }

      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      if (city === '') {
        setUrl(`${REQUEST_URL}current.json?key=${API_KEY}&q=auto:ip`)
        setSearchUrl(`${REQUEST_URL}search.json?key=${API_KEY}&q=auto:ip`)
        setUrlDays(
          `${REQUEST_URL}forecast.json?key=${API_KEY}&q=auto:ip&days=3`
        )
      }
    }
    if (city !== '' && search !== '') {
      setUrl(`${REQUEST_URL}current.json?key=${API_KEY}&q=${city}`)
      setUrlDays(`${REQUEST_URL}forecast.json?key=${API_KEY}&q=${city}&days=3`)
      setSearchUrl(`${REQUEST_URL}search.json?key=${API_KEY}&q=${search}`)
    }
  }, [city, search])
}

export { configAPI }
