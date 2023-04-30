import PropTypes from 'prop-types';
import css from './FriendList.module.css';

import FriendListItem from './FriendListItem/FriendListItem'

const FriendList = ({friends}) => {return (
<ul className={css.friendList}>
    {friends.map((friend)=> <FriendListItem key={friend.id} {...friend} />)}
</ul>
)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };
  export default FriendList;
  