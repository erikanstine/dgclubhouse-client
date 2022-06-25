import { Close } from '@mui/icons-material';
import { useState } from 'react';
import './discAddModal.css';

export default function DiscAddModal(props) {
  const [currentDisc, setCurrentDisc] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className='discAddModal'>
      <div className='discAddWrapper'>
        <div className='discAddModalTop'>
          <span className='modalTitleText'>Add a new disc</span>
          <Close className='modalTopIcon' onClick={props.toggle}/>
        </div>
        <form onSubmit={handleClick} className='addDiscForm'>
          <div className='topRow'>
            <select className='discAddSelect'>
              <option>Thunderbird</option>
            </select>
            <div className='discInfoItem'>
              <span className='discInfoKey'>Speed:</span>
              <span className='discInfoValue'>{currentDisc ? currentDisc.speed : ''}</span>
            </div>
            <div className='discInfoItem'>
              <span className='discInfoKey'>Glide:</span>
              <span className='discInfoValue'>{currentDisc ? currentDisc.glide : ''}</span>
            </div>
            <div className='discInfoItem'>
              <span className='discInfoKey'>Turn:</span>
              <span className='discInfoValue'>{currentDisc ? currentDisc.turn : ''}</span>
            </div>
            <div className='discInfoItem'>
              <span className='discInfoKey'>Fade:</span>
              <span className='discInfoValue'>{currentDisc ? currentDisc.speed : ''}</span>
            </div>
          </div>
          <div className='inputRow'>
            How does the disc fly for you?
            <span className='subheader'>(Leave blank if unsure)</span>
            <input placeholder='Weight' className='discAddInput' />
            <input placeholder='Weight' className='discAddInput' />
            <input placeholder='Weight' className='discAddInput' />
            <input type='text' className='discAddInput' />
          </div>
          <button className='discAddButton' type='submit'>
            Add Disc
          </button>
        </form>
      </div>
    </div>
  );
}
