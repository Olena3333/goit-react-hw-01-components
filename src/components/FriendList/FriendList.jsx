import React from 'react';
import css from './FriendList.module.css';
import clsx from 'clsx';
export const FriendList = ({ friends }) => {
  return (
    <section className={css.wrapper}>
      <ul className={css.list}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li className={css.item} key={id}>
            <span className={clsx(isOnline ? css.isOnline : css.isNotOnline)}>
              {isOnline}
            </span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
