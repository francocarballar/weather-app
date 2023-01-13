import React, { useEffect } from 'react'
import './ErrorGeolocation.css'

function ErrorGeolocation () {
  useEffect(() => {
    window.document.body.style.overflow = 'hidden'
  }, [])
  return (
    <section className='modal-error'>
      <div>
        <p>
          Please grant the necessary permissions to the browser in order to use
          this application.
        </p>
      </div>
    </section>
  )
}

export { ErrorGeolocation }
