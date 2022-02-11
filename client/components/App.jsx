import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSchedule } from '../actions/index'
import Schedule from './Schedule'
import AddPerfomer from './AddPerformer'

function App () {
  const scheduleList = useSelector(state => state.schedule)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSchedule())
  }, [])

  return (
    <>
      <h1>HARAKEKE-OKE</h1>
      <div className="flex-container">
        <div>
          <AddPerfomer>
          </AddPerfomer>
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
