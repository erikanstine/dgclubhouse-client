import Topbar from '../../components/topbar/Topbar';
import React, { useEffect, useState } from 'react';
import './bag.css';
import Disc from '../../components/disc/Disc';
import { AddBox } from '@mui/icons-material';
import DiscAddModal from '../../components/discAddModal/DiscAddModal';
import { Discs } from '../../dummyDiscData';

export default function Bag() {
  const [showModal, setShowModal] = useState(false);
  const [currentDiscCategory, setCurrentDiscCategory] = useState(null);

  const selectDiscCategory = (c) => {
    setCurrentDiscCategory();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    function handleEscapeKey(event: React.KeyboardEvent) {
      if (event.code === 'Escape') {
        setShowModal(false);
      }
    }
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <>
      <Topbar />
      <div className='bag'>
        <div className='bagMenu'>
          <div className='bagMenuWrapper'>
            <input
              placeholder='Search your discs...'
              className='bagMenuInput'
            />
            <div className='addDisc bagMenuInput'>
              <button className='addDiscButton' onClick={openModal}>
                <AddBox />
                Add a disc
              </button>
              {showModal && (
                <DiscAddModal
                  toggle={closeModal}
                />
              )}
            </div>
            <div className='bagMenuPutter'>
              <h3 className='bagMenuHeader'>Putter</h3>
              {/* <Disc />
              <Disc />
              <Disc />
              <Disc />
              <Disc /> */}
            </div>
            <div className='bagMenuMidrange'>
              <h3 className='bagMenuHeader'>Midrange</h3>
              {/* <Disc /> */}
            </div>
            <div className='bagMenuFairway'>
              <h3 className='bagMenuHeader'>Fairway Driver</h3>
              {/* <Disc /> */}
            </div>
            <div className='bagMenuDistanceDriver'>
              <h3 className='bagMenuHeader'>Distance Driver</h3>

              {/* <Disc />
              <Disc />
              <Disc />
              <Disc />
              <Disc />
              <Disc /> */}
            </div>
          </div>
        </div>
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
