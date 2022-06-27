import React, { useContext } from 'react';
import './topbar.css';
import { Person, Search, Chat, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>DG Clubhouse</span>
        </Link>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <div className='searchIcon'>
            <Search />
          </div>
          <input placeholder='Search' className='searchInput' />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Home</span>
          <Link to="/bag" className='topbarItemLink'>
            <span className='topbarLink'>Bag</span>
          </Link>
          <span className='topbarLink'>Clubs</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Link to="/messenger" className="topbarIconItemLink">
              <Chat />
            </Link>
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>3</span>
          </div>
        </div>
        <div className='topbarImg'>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + 'people/noAvatar.png'
              }
              alt=''
              className='topbarImg'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
