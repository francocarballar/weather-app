import React, { useState, createContext } from 'react'

const Context = createContext({})

const Provider = ({ children }) => {
  const [temperature, setTemperature] = useState('')
  const [conditionIcon, setConditionIcon] = useState('')
  const [conditionText, setConditionText] = useState('')
  const [location, setLocation] = useState('')
  const [humidity, setHumidity] = useState('')
  const [windStatus, setWindStatus] = useState('')
  const [pressure, setPressure] = useState('')
  const [visibility, setVisibility] = useState('')
  const [city, setCity] = useState('')
  const [myCity, setMyCity] = useState('')
  const [tomorrow, setTomorrow] = useState('')
  const [dayAfterTomorrow, setDayAfterTomorrow] = useState('')
  const [search, setSearch] = useState('')
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
  const [url, setUrl] = useState('')
  const [searchUrl, setSearchUrl] = useState('')
  const [urlDays, setUrlDays] = useState('')
  const [errorGeolocation, setErrorGeolocation] = useState(false)
  const [navBar, setNavBar] = useState(false)
  const [loading, setLoading] = useState(true)
  return (
    <Context.Provider
      value={{
        temperature,
        setTemperature,
        conditionIcon,
        setConditionIcon,
        conditionText,
        setConditionText,
        location,
        setLocation,
        humidity,
        setHumidity,
        windStatus,
        setWindStatus,
        pressure,
        setPressure,
        visibility,
        setVisibility,
        city,
        setCity,
        myCity,
        setMyCity,
        tomorrow,
        setTomorrow,
        dayAfterTomorrow,
        setDayAfterTomorrow,
        search,
        setSearch,
        minTempDay1,
        setMinTempDay1,
        maxTempDay1,
        setMaxTempDay1,
        conditionText1,
        setConditionText1,
        conditionIcon1,
        setConditionIcon1,
        minTempDay2,
        setMinTempDay2,
        maxTempDay2,
        setMaxTempDay2,
        conditionText2,
        setConditionText2,
        conditionIcon2,
        setConditionIcon2,
        minTempDay3,
        setMinTempDay3,
        maxTempDay3,
        setMaxTempDay3,
        conditionText3,
        setConditionText3,
        conditionIcon3,
        setConditionIcon3,
        url,
        setUrl,
        searchUrl,
        setSearchUrl,
        urlDays,
        setUrlDays,
        errorGeolocation,
        setErrorGeolocation,
        navBar,
        setNavBar,
        loading,
        setLoading
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, Provider }
