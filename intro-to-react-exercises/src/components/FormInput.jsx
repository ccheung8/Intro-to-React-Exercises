export function FormInput({ handleFormInput, formInput }) {
  return (
    <div className='formInput'>
      <h2>Simple Form Input</h2>
      <input type="text" onChange={handleFormInput} />
      <p>{formInput}</p>
    </div>
  )
}