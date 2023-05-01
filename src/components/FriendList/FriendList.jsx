import PropTypes from 'prop-types';
import {FriendListItem} from 'components/FriendListItem/FriendListItem';
import {FriendListStyled} from './FriendListStyled';

export const FriendList = ({ friends }) => {
      return (
          <FriendListStyled>
         {friends.map(({ avatar, name, isOnline, id }) => (
         <FriendListItem
           key={id}
           avatar={avatar}
           name={name}
           isOnline={isOnline}>
           </FriendListItem>
         ))}
         </FriendListStyled>
         );
         };
    
    FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired
      }))
  }
