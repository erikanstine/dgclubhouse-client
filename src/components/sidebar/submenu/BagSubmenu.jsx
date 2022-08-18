import { useEffect, useState } from 'react';
import { AddBox } from '@mui/icons-material';
import DiscAddModal from '../../../components/discAddModal/DiscAddModal';

export default function BagSubmenu() {
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
      <div className='sidebarSubmenu'>
        {/* <input
              placeholder='Search your discs...'
              className='bagMenuInput'
            /> */}
        <div className='addDisc bagMenuInput'>
          <button className='addDiscButton' onClick={openModal}>
            <AddBox />
            Add a disc
          </button>
          {showModal && <DiscAddModal toggle={closeModal} />}
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
    </>
  );
}
