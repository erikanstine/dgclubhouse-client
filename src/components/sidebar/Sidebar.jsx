import React from 'react';
import './sidebar.css';
import {
  Assessment,
  Backpack,
  CalendarViewMonth,
  EmojiPeople,
  EmojiEvents,
  Groups,
  GolfCourse,
  RssFeed,
} from '@mui/icons-material';
import { Users } from '../../dummyData';
import { Link } from 'react-router-dom';
import FriendSubmenu from './submenu/FriendSubmenu';
import BagSubmenu from './submenu/BagSubmenu';


export default function Sidebar({submenu}) {
  function getSubmenu(submenu, params) {
    switch(submenu) {
      case "bag":
        return <BagSubmenu {...params}/>;
      default:
        return <FriendSubmenu users={params}/>
    };
  };

  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem disable'>
            <RssFeed className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <Link className='sidebarListItemLink' to='/bag'>
              <Backpack className='sidebarIcon' />
              <span className='sidebarListItemText'>Your Bag</span>
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link className='sidebarListItemLink' to='/rounds'>
              <CalendarViewMonth className='sidebarIcon'/>
              <span className="sidevarListItemText">Rounds</span>
            </Link>
          </li>
          <li className='sidebarListItem'>
            <GolfCourse className='sidebarIcon' />
            <span className='sidebarListItemText disable'>Courses</span>
          </li>
          {/* Items below disabled */}
          <li className='sidebarListItem disable'>
            <EmojiPeople className='sidebarIcon' />
            <span className='sidebarListItemText'>Friends</span>
          </li>
          <li className='sidebarListItem disable'>
            <EmojiEvents className='sidebarIcon' />
            <span className='sidebarListItemText'>Tournaments</span>
          </li>
          <li className='sidebarListItem disable'>
            <Groups className='sidebarIcon' />
            <span className='sidebarListItemText'>Clubs</span>
          </li>
          <li className='sidebarListItem disable'>
            <Assessment className='sidebarIcon' />
            <span className='sidebarListItemText'>DiscFinder</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        {getSubmenu(submenu, Users)}
      </div>
    </div>
  );
}
