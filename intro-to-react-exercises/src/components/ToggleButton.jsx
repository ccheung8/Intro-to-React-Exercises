export function ToggleButton({ handleToggle, toggle }) {
  return (
    <>
      <h2>Toggle Button</h2>
      <div className='toggleButton'>
        <button onClick={handleToggle}>{toggle}</button>
      </div>
    </>
  )
}