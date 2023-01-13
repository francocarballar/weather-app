import React, { useContext } from 'react'
import { Context } from '../../context'
import { IconLocation } from '../Icons/IconLocation'
import { IconCrosshair } from '../Icons/IconCrosshair'
import './SectionMain.css'
import { SkeletonCircle, Skeleton } from '@chakra-ui/skeleton'

function SectionMain ({ today }) {
  const {
    setCity,
    myCity,
    location,
    conditionIcon,
    temperature,
    conditionText,
    setNavBar,
    loading
  } = useContext(Context)
  const clickSearchPlaces = () => {
    setNavBar(true)
    document.body.style.overflow = 'hidden'
  }
  return (
    <section className='section__main'>
      <nav className='nav'>
        <button
          type='button'
          className='search-for-places'
          onClick={clickSearchPlaces}
        >
          Search for places
        </button>
        <button
          type='button'
          className='my-location'
          onClick={() => {
            setCity(myCity)
          }}
          aria-label='My location'
        >
          <IconCrosshair />
        </button>
      </nav>
      <div className='bg-image'>
        {loading && <SkeletonCircle height='150px' width='150px' />}
        {!loading && (
          <figure>
            <img
              src={conditionIcon}
              alt={conditionText}
              width={150}
              height={140}
            />
          </figure>
        )}
      </div>
      {loading && <Skeleton height='80px' width='160px' />}
      {!loading && (
        <h1 className='temperature'>
          {temperature}
          <span>°C</span>
        </h1>
      )}
      {loading && <Skeleton height='40px' width='220px' />}
      {!loading && <h2 className='weather-conditions'>{conditionText}</h2>}
      <div className='date-info'>
        <p>{today}</p>
      </div>
      <div className='location'>
        <IconLocation />
        {loading && <Skeleton height='24px' width='90px' />}
        {!loading && <p>{location}</p>}
      </div>
    </section>
  )
}

export { SectionMain }
