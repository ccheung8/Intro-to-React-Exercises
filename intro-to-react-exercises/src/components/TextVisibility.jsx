export function TextVisibility({ handleVisibility, isVisible }) {
  return (
    <div className='textVisibility'>
      <h2>Show/Hide Text</h2>
      <button onClick={handleVisibility}>Show/Hide Text</button>
      <p
        style={{ display: isVisible == true ? "block" : "none" }}
      >
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
      </p>
    </div>
  )
}