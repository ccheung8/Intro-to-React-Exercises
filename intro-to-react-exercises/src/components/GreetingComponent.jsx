import { GreetingForm } from "./GreetingForm";

export function GreetingComponent({ handleName, name }) {
  return (
    <div className='greetingContainer'>
      <h2>Greeting Component</h2>
      <GreetingForm 
        handleName={handleName}
      />
      {name && <p>Hello, {name}!</p>}
    </div>
  )
}