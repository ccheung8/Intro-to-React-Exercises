import React from 'react';
import { GreetingComponent } from './components/GreetingComponent';
import { ProfileComponent } from './components/ProfileComponent';
import { CounterApp } from './components/CounterApp';
import { ToggleButton } from './components/ToggleButton';
import { TextVisibility } from './components/TextVisibility';
import { FormInput } from './components/formInput';
import { ListRendering } from './components/ListRendering';

function App() {
  const [name, setName] = React.useState();
  const [user, setUser] = React.useState();
  const [count, setCount] = React.useState(0);
  const [toggle, setToggle] = React.useState("On");
  const [isVisible, setIsVisible] = React.useState(true);
  const [formInput, setFormInput] = React.useState();
  const [items, setItems] = React.useState([]);

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

  function handleToggle(event) {
    setToggle(toggle == "On" ? "Off" : "On");
    // inverse since toggle doesn't update until after render
    event.target.style.backgroundColor = toggle != "On" ? "#00ff00" : "#ff0000";
  }

  function handleVisibility() {
    setIsVisible(isVisible == true ? false : true);
  }

  function handleFormInput(event) {
    setFormInput(event.target.value);
  }

  function renderItem(event) {
    event.preventDefault();
    setItems([...items, event.target[0].value]);
    event.target[0].value = "";
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
      
      <ToggleButton
        handleToggle={handleToggle}
        toggle={toggle}
      />

      <TextVisibility
        handleVisibility={handleVisibility}
        isVisible={isVisible}
      />

      <FormInput
        handleFormInput={handleFormInput}
        formInput={formInput}
      />

      <ListRendering
        renderItem={renderItem}
        items={items}
      />
    </>
  )
}

export default App
