import React from 'react';
import PropTypes from 'prop-types';
import css from './friendList.module.css'; // Zaimportuj swój plik CSS

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friends-list']}>
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

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
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
      <p className={css.name}>
        {name}
        {isOnline ? <span className={css.onlineStatus}>Online</span> : <span className={css.offlineStatus}>Offline</span>}
      </p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
