import React, { useContext, useEffect, useState } from 'react';
import './rightbar.css';
import Online from '../online/Online';
import { Users } from '../../dummyData';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Add, Remove } from '@mui/icons-material';

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.following.includes(user?._id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get('/users/friends/' + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put('/users/' + user._id + '/unfollow', {
          userId: currentUser._id,
        });
        dispatch({ type: 'UNFOLLOW', payload: user._id });
      } else {
        await axios.put('/users/' + user._id + '/follow', {
          userId: currentUser._id,
        });
        dispatch({ type: 'FOLLOW', payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img src={`${PF}gift.png`} alt='' className='birthdayImg' />
          <span className='birthdayText'>
            <b>Paul Mcbeth</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src={`${PF}otb_ad.png`} alt='' className='rightbarAd' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className='rightbarFollowButton' onClick={handleClick}>
            {followed ? 'Unfollow' : 'Follow'}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>{user.city}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'> {user.from}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Throwing Style:</span>
            <span className='rightbarInfoValue'>{user.throwStyle}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>PDGA #:</span>
            <span className='rightbarInfoValue'>{user.pdgaNumber}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Rating:</span>
            <span className='rightbarInfoValue'>{user.pdgaRating}</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className='rightbarFollowings'>
          {friends.map((friend) => (
            <Link
              to={'/profile/' + friend.username}
              key={friend.username}
              style={{ textDecoration: 'none' }}>
              <div className='rightbarFollowing'>
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + 'people/noAvatar.png'
                  }
                  alt=''
                  className='rightbarFollowingImg'
                />
                <span className='rightbarFollowingName'>{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
