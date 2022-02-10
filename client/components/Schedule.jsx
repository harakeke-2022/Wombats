import React from 'react'

function Schedule (props) {
  const { id, name, song, url } = props.song
  return (
    <>
      <section>
        <ul>
          <li><h2>#{id} {name}</h2></li>
          <h4>Choice of Song:</h4>
          <a href={url}>{song}</a>
        </ul>
      </section>

    </>
  )
}

export default Schedule
