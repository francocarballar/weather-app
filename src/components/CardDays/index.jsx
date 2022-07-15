import React from 'react'
import './CardDays.css'

function CardDays ({
  date,
  min_temperature,
  max_temperature,
  weather_image,
  alt__weather_image
}) {
  return (
    <div className='card_days'>
      <p>{date}</p>
      <img src={weather_image} alt={alt__weather_image}></img>
      <div>
        <p>{max_temperature}</p>
        <p className='min-temperature'>{min_temperature}</p>
      </div>
    </div>
  )
}

export { CardDays }
