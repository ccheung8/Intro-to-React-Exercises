import { RenderForm } from "./RenderForm"
import { RenderList } from "./RenderList"

export function ListRendering({ renderItem, items }) {
  return (
    <div className='listRendering'>
      <h2>List Rendering</h2>
      <RenderForm
        renderItem={renderItem}
      />

      <RenderList
        items={items}
      />
    </div>
  )
}