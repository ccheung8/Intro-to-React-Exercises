export function GreetingForm({ handleName }) {
  return (
    <form onSubmit={handleName}>
      <label htmlFor='name'>Enter Your Name:</label>
      <input type="text" name='name' id='name' style={{height: "min-content"}} />
      <button type='submit'>Enter</button>
    </form>
  )
}