export function Profile({ user }) {
  return (
    <div className='profile'>
      {user && <img src={user.image} alt={`image of ${user.name}`} />}
      {user && <h3>{user.name}</h3>}
      {user && <p>{user.description}</p>}
    </div>
  )
}