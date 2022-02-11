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
      {/* <div className="wrapper">
        <div className='box'><span className='dot'></span></div>
        <div className='box'><span className='dot'></span></div>
      </div> */}
      <h1>HARAKEKE-OKE</h1>
      <div className="flex-container">
        <div>
          <button a href="#" className="discoBtn">Add my song!</button>
        </div>
        <div className="waitlist">
          <ul>
            <h2>WAITLIST</h2>
            {scheduleList.map(song => (
              <Schedule key={song.id} song={song}> </Schedule>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
