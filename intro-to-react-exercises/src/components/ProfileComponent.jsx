import { Profile } from "./Profile"

export function ProfileComponent({ user, generateUser }) {
  return (
    <div className='profileContainer'>
      <h2>Static Profile Card</h2>
      <Profile
        user={user}
        generateUser={generateUser}
      />
    </div>
  )
}