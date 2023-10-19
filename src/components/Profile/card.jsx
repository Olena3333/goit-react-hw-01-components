export const Card = ({ user }) => {
    const {username, tag, location, avatar} = user
    return (
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">`@${tag}`</p>
    <p class="location">{location}</p>
  </div>  
    )
}