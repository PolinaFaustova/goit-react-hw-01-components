import PropTypes from 'prop-types';
import css from './FriendList.module.css';

    export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
         <span className={isOnline ? "status online" : "status offline"}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
        </li>
    );
    };

// export const FriendListItem = ({avatar, name, isOnline}) => {
// const statusClass = isOnline ? css.online : css.offline;

//     return (
//       <FriendListItem>
//   <li className={css.item}>
//   <span className={`${css.status} ${statusClass}`}></span>
//   <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
//   <p className={css.name}>{name}</p>
// </li>
// </FriendListItem>
//     )
// }

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

// import { FriendList } from 'components/FriendList/FriendList';
// import css from './FriendListItem.module.css';
// export const FriendListItem = ({ avatar, name, isOnline }) => {
//     return (
//         <FriendListItem>
//             <FriendStatus isOnline={isOnline}></FriendStatus>
//             <FriendAvatar
//                 src={avatar}
//                 alt={name + " avatar"}/>
//             <FriendName>{name}</FriendName>
//         </FriendListItem>
//     )
// }
// {/* <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="User avatar" width="48" />
//   <p class="name"></p>
// </li> */}

