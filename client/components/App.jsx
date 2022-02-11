import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSchedule } from '../actions'
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
        <ul>
          {scheduleList.map(song => (

            <Schedule key={song.id} song={song}> </Schedule>
          ))}
        </ul>
      </div>
      <div>
        <iframe width="560" height="315" src="https://youtu.be/yqBoguCCG4A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </>
  )
}

export default App
