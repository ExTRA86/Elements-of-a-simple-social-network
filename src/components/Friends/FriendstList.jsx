import React from 'react';
import FriendsItem from './FriendsItem';

export default function FriendsList({ friends, title, remove }) {
  if (!friends.length) {
    return <h1 style={{ textAlign: 'center' }}>Друзья не найдены!</h1>;
  }

  return (
    <div className='gallery'>
      <h1 className='title'>{title}</h1>
      {friends.map((friend, index) => (
        <FriendsItem
          remove={remove}
          number={index + 1}
          friend={friend}
          key={friend.id}
        />
      ))}
    </div>
  );
}
