import { useEffect, useState } from 'react';
import axios from 'axios';
import './conversation.css';

export default function Conversation({ conversation, currentUser }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState(null);
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios.get('/users?userId=' + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className='conversation'>
      <img
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + 'people/noAvatar.png'
        }
        alt=''
        className='conversationImg'
      />
      <span className='conversationName'>{user?.username}</span>
    </div>
  );
}
