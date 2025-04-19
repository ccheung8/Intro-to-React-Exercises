import React from 'react';
import { GreetingComponent } from './components/GreetingComponent';

function App() {
  const [name, setName] = React.useState();

  function handleName(event) {
    event.preventDefault();
    setName(event.target.name.value);
    event.target.name.value = "";
  }

  return (
    <>
      <h1>Beginner Exercises</h1>

        <GreetingComponent 
          handleName={handleName}
          name={name}
        />

    </>
  )
}

export default App
