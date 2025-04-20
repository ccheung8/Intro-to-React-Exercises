import React from 'react';
import { GreetingComponent } from './components/GreetingComponent';

function App() {
  const [name, setName] = React.useState();
  const [user, setUser] = React.useState();

  function handleName(event) {
    event.preventDefault();
    setName(event.target.name.value);
    event.target.name.value = "";
  }

  function generateUser() {
    fetch('https://randomuser.me/api')
      .then(res => { return res.json(); })
      .then((json) => {
        console.log(json.results[0]);
      });
  }

  return (
    <>
      <h1>Beginner Exercises</h1>

        <GreetingComponent 
          handleName={handleName}
          name={name}
        />

        <div className='profileContainer'>
          <h2>Static Profile Card</h2>
          <div className='profile'>
            <img src="" alt="" />
            <h3>User Name</h3>
            <p>some description</p>
          </div>
          <button onClick={generateUser}>Generate User</button>
        </div>


    </>
  )
}

export default App
