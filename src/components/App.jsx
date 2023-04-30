import {Profile} from './Profile/Profile'
import { Statistics } from './Statistics/Statistics';

import user from './Data/user.json'
import statistics from './Data/statistics.json'

export const App = () => {
  return (
    <>
    <Profile
     username={user.username}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     followers={user.stats.followers}
     views={user.stats.views}
     likes={user.stats.likes} />
     <Statistics title="Upload stats" stats={statistics} />
     <Statistics stats={statistics} />
    </>
  );
};
