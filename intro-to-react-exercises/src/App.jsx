import React from 'react';
import { GreetingComponent } from './components/GreetingComponent';
import { ProfileComponent } from './components/ProfileComponent';
import { CounterApp } from './components/CounterApp';

function App() {
  const [name, setName] = React.useState();
  const [user, setUser] = React.useState();
  const [count, setCount] = React.useState(0);

  function handleName(event) {
    event.preventDefault();
    setName(event.target.name.value);
    event.target.name.value = "";
  }

  function generateUser() {
    fetch('https://randomuser.me/api')
      .then(res => { return res.json(); })
      .then((json) => {
        const user = json.results[0];
        setUser({
          name: `${user.name.first} ${user.name.last}`,
          image: user.picture.large,
          description: `${user.name.title} ${user.name.first} ${user.name.last} is from ${user.location.city}, ${user.location.state} in the ${user.location.country}. ${user.name.first} was born on ${user.dob.date} and is ${user.dob.age} years old.`
        });
      });
  }

  function handleCounter(action) {
    if (action === "increment") {
      setCount(prev => prev + 1);
    } else {
      setCount(prev => prev - 1);
    }
  }

  return (
    <>
      <h1>Beginner Exercises</h1>

        <GreetingComponent 
          handleName={handleName}
          name={name}
        />

        <ProfileComponent
          user={user}
          generateUser={generateUser}
        />

        <CounterApp
          handleCounter={handleCounter}
          count={count}
        />
    </>
  )
}

export default App
