import React from 'react'

const Options = ({ text, selectOption }) => {
  return (
    <li onClick={() => selectOption()} key={text}>{text}</li>
  )
}

export default Options