import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSchedule } from '../actions/index'
import Schedule from './Schedule'
import GetScore from './GetScore'

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
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cG12YDKjpos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <GetScore/>
    </>
  )
}

export default App
