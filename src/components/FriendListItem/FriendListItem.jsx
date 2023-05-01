import PropTypes from 'prop-types';
import {FriendListItemStyled, Name, Status, Avatar} from './FriendListItemStyled'


    export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendListItemStyled>
         <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt={name + " avatar"} width="48" />
        <Name>{name}</Name>
        </FriendListItemStyled>
    );
    };


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

