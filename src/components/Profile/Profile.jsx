import { Card } from './card';
import { Stats } from './stats';
export const Profile = ({ user }) => {
  return (
    <div class="profile">
      <Card {...user} />
      <Stats stats={user.stats} />
    </div>
  );
};
