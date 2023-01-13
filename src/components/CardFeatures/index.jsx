import React from 'react'
import './CardFeatures.css'
import { Skeleton } from '@chakra-ui/skeleton'

function CardFeatures ({ title, data, measurement, loading }) {
  return (
    <div className='card_features'>
      <p>{title}</p>
      {loading && <Skeleton width='165px' height='120px' />}
      {!loading && (
        <p className='data'>
          {data}
          <span>{measurement}</span>
        </p>
      )}
    </div>
  )
}

export { CardFeatures }
