// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React from 'react';

function App() {
  const [name, setName] = React.useState();

  function handleName(event) {
    event.preventDefault();
    setName(event.target.name.value);
  }

  return (
    <>
      <h1>Beginner Exercises</h1>
      <div className='greetingComponent'>
        <h2>Greeting Component</h2>
        <form onSubmit={handleName}>
          <label htmlFor='name'>Enter Your Name:</label>
          <input type="text" name='name' id='name' />
          <button type='submit'>Enter</button>
        </form>
        {name && <p>Hello, {name}!</p>}
      </div>
    </>
  )
}

export default App
