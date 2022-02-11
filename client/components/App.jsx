import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSchedule } from '../actions/index'
import Schedule from './Schedule'

function App () {
  const scheduleList = useSelector(state => state.schedule)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSchedule())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>HARAKEKE-OKE</h1>
        <div><button a href="#" class="discoBtn">Add my song!</button></div>
        <ul>
          {scheduleList.map(song => (
            <Schedule key={song.id} song={song}> </Schedule>
          ))}
        </ul>
      </div>


    </>
  )
}

export default App
