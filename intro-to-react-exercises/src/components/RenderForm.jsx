export function RenderForm({ renderItem }) {
  return (
    <form onSubmit={renderItem}>
      <label htmlFor="item">Enter an Item:</label>
      <input type="text" name='item' />
      <button type='submit'>Enter</button>
    </form>
  )
}