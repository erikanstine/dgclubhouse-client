import React from 'react';
import './friend.css';

export default function Friend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className='sidebarFriend'>
      <img
        className='sidebarFriendImg'
        src={
          user.profilePicture
            ? PF + user.profilePicture
            : PF + 'people/noAvatar.png'
        }
        alt=''
      />
      <span className='sidebarFriendName'>{user.username}</span>
    </li>
  );
}
