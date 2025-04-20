export function CounterApp({ handleCounter, count }) {
  return (
    <>
      <h2>Counter App</h2>
        <div className='counterApp'>
          <button onClick={() => handleCounter("decrement")}>-</button>
          <p>{count}</p>
          <button onClick={() => handleCounter("increment")}>+</button>
        </div>
    </>
  )
}