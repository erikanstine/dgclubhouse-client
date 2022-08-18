import Topbar from '../../components/topbar/Topbar';
import React, { useEffect, useState } from 'react';
import './bag.css';
import Disc from '../../components/disc/Disc';
import { Discs } from '../../dummyDiscData';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Bag() {
  return (
    <>
      <Topbar />
      <div className='bagPageContainer'>
        <Sidebar submenu='bag' />
        <div className='bagCenter'>
          <div className='bagTitle'>Current Bag</div>
          <div className='bagCenterContainer'>
            {Discs.sort((d1, d2) => {
              return d2.speed - d1.speed;
            }).map((d) => (
              <Disc key={d.id} disc={d} />
            ))}
          </div>
        </div>
        <div className='bagRight'>
          <div className='bagTitle'>Discs you might like</div>
        </div>
      </div>
    </>
  );
}
