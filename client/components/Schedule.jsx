import React from 'react'

function Schedule (props) {
  const { id, name, song, url } = props.song
  return (
    <>
      <section>
        <ul>
          <li><h3>#{id} {name}</h3></li>
          <a href={url}>{song}</a>
        </ul>
      </section>

    </>
  )
}

export default Schedule
