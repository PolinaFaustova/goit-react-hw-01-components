import {Profile} from './Profile/Profile'

import user from './Data/user.json'

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
    </>
  );
};
