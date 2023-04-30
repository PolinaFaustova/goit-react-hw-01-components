import css from './FriendList.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
const statusClass = isOnline ? css.online : css.offline;

    return (
  <li className={css.item}>
  <span className={`${css.status} ${statusClass}`}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;
