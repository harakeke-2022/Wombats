import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSchedule } from '../actions'

function App () {
  const fruits = useSelector(state => state.schedule)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSchedule())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
      <div></div>
    </>
  )
}

export default App
