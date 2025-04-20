import { Profile } from "./Profile"

export function ProfileComponent({ user, generateUser }) {
  return (
    <div className='profileContainer'>
      <h2>Static Profile Card</h2>
      <Profile
        user={user}
      />
      <button onClick={generateUser}>Generate User</button>
    </div>
  )
}