import React, { useContext, useEffect, useRef } from 'react'
import { Context } from '../../context'
import { useAPI } from '../../hooks/useAPI'
import { configAPI } from '../../utils/configAPI'
import './NavBar.css'
import { IconClose } from '../Icons/IconClose'

function NavBar () {
  const { setSearch, searchUrl, search, navBar, setNavBar, setCity } =
    useContext(Context)
  const inputSearch = useRef(null)
  configAPI()
  const { resultsSearch } = useAPI()
  useEffect(() => {
    resultsSearch(searchUrl)
    inputSearch.current.focus()
  }, [search])
  const clickClose = () => {
    setNavBar(false)
    document.body.style = 'overflow-y: scroll'
  }
  const handleSearch = e => {
    setSearch(e.target.value)
  }
  return (
    <>
      {navBar && (
        <section className='navBar'>
          <span className='close' onClick={clickClose}>
            <IconClose />
          </span>
          <label htmlFor='search'>
            <input
              type='search'
              id='search'
              name='search'
              placeholder='search location'
              onChange={handleSearch}
              ref={inputSearch}
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
