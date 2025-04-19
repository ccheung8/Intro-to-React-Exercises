export function GreetingComponent({ handleName, name }) {
  return (
    <div className='greetingContainer'>
        <h2>Greeting Component</h2>
      <form onSubmit={handleName}>
        <label htmlFor='name'>Enter Your Name:</label>
        <input type="text" name='name' id='name' style={{height: "min-content"}} />
        <button type='submit'>Enter</button>
      </form>
      {name && <p>Hello, {name}!</p>}
    </div>
  )
}