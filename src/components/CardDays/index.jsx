import React from 'react'
import './CardDays.css'
import { Skeleton, SkeletonCircle } from '@chakra-ui/skeleton'

function CardDays ({
  date,
  minTemperature,
  maxTemperature,
  weatherImage,
  altWeatherImage,
  loading
}) {
  return (
    <div className='card_days'>
      <p>{date}</p>
      {loading && <SkeletonCircle width='50px' height='50px' />}
      {!loading && (
        <img src={weatherImage} alt={altWeatherImage} width={57} height={66} />
      )}
      {loading && <Skeleton width='75px' height='20px' />}
      {!loading && (
        <div>
          <p>{maxTemperature}</p>
          <p className='min-temperature'>{minTemperature}</p>
        </div>
      )}
    </div>
  )
}

export { CardDays }
