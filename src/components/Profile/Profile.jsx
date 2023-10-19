import { Card } from "./card"
import { Stats } from "./stats"
export const Profile = ({ user }) => {
    return (
        <div class="profile">
            <Card
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar} />
            <Stats stats={user.stats}
            />   
</div>     
    )
}