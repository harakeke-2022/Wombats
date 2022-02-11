import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postPerformer } from '../actions'

function AddPerformer () {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: '',
    song: '',
    url: ''
  })

  function handleChange (event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit (event) {
    event.preventDefault()
    dispatch(postPerformer(input))
    console.log(input)
  }

  // const action = postPerformer(input)
  // dispatch(action)

  return (
    <>
      <form >
        <input
          type="text"
          value={input.name}
          name='name'
          onChange={handleChange}
          placeholder='Enter Name'
          className='addNew'
        />

        <input
          type="text"
          value={input.song}
          name='song'
          onChange={handleChange}
          placeholder='Enter Song'
          className='addNew'
        />

        <input
          type="text"
          value={input.url}
          name='url'
          onChange={handleChange}
          placeholder='Enter URL'
          className='addNew'
        />
        <button className="discoBtn" onClick={handleSubmit}>Add my song!</button>
      </form>
    </>)
}

export default AddPerformer
