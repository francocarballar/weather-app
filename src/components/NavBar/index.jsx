import React, { useState } from 'react'
import './NavBar.css'

function NavBar ({ navBar, setNavBar, city, setCity }) {
  const [stateSearch, setSearch] = useState('')
  const clickClose = () => {
    setNavBar(false)
    document.body.style = 'overflow-y: scroll'
  }
  const inputSearch = e => {
    setSearch(e.target.value)
  }
  const api_Key = 'a46af953702c497ab6022616221507'
  const request_URL = 'http://api.weatherapi.com/v1/'
  const search_URL = `${request_URL}search.json?key=${api_Key}&q=${stateSearch}`
  const containerSearch = document.querySelector('.container_search')
  const ul = document.createElement('ul')
  const resultsSearch = async () => {
    try {
      const response = await fetch(search_URL)
      const data = await response.json()
      if (response.status === 200) {
        const ul__containerSearch = document.querySelectorAll(
          '.container_search ul'
        )
        data.map(d => {
          const coor = `${d.lat}, ${d.lon}`
          const elem = document.createElement('li')
          elem.appendChild(document.createTextNode(d.name))
          elem.setAttribute('data-coor', coor)
          ul.appendChild(elem)
          containerSearch.appendChild(ul)
        })
        ul__containerSearch.forEach(function (node) {
          containerSearch.removeChild(node)
        })
      }
    } catch (err) {
      console.error(err)
    }
  }
  resultsSearch()
  return (
    <>
      {navBar && (
        <section className='navBar'>
          <figure>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='close'
              onClick={clickClose}
            >
              <path
                d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'
                className='close__path'
                fill='var(--text-color)'
              />
            </svg>
          </figure>
          <label htmlFor='search'>
            <input
              type='search'
              id='search'
              name='search'
              placeholder='search location'
              onChange={inputSearch}
            />
            <button type='button' id='button_search' onClick={resultsSearch}>
              Search
            </button>
          </label>
          <div
            className='container_search'
            onClick={e => {
              const dataSet = e.target.dataset.coor
              setCity(dataSet)
              clickClose()
            }}
          ></div>
        </section>
      )}
    </>
  )
}

export { NavBar }
