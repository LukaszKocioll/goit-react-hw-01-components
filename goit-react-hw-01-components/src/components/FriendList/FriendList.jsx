import css from './friendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css["friends-list"]}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

export const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="40"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
