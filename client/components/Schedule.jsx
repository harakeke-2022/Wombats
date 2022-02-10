import React from 'react'

function Schedule (props) {
  const { id, name, song, url } = props.song
  return (
    <>
      <section>
        <ul>
          <li><h2>#{id} {name}</h2></li>
          <p><h4>Song of Choice:</h4> {song}</p>
          <a>{url}</a>

        </ul>
      </section>

    </>
  )
}

export default Schedule
