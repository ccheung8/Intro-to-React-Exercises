export function RenderList({ items }) {
  return (
    <ul>
      {items.map((item, idx) => {
        return <li key={idx}>{item}</li>
      })}
    </ul>
  )
}