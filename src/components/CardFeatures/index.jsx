import React from 'react'
import './CardFeatures.css'

function CardFeatures ({ title, data, measurement }) {
  return (
    <div className='card_features'>
      <p>{title}</p>
      <p className='data'>
        {data}
        <span>{measurement}</span>
      </p>
    </div>
  )
}

export { CardFeatures }
