import './disc.css';

export default function Disc({ disc }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
      <div className='currentBagDiscWrapper'>
          <img
            src={
              disc.discImage
                ? PF + disc.discImage
                : PF + 'discs/paper_plate.jpeg'
            }
            alt=''
            className='currentBagImg'
          />
        <div className='discInfoBox'>
          <span className='discInfoTitle'>{disc.name}</span>
          <span className="discInfoSubTitle">
              {disc.plastic}
          </span>
          <span className='discInfoSubtitle'>
            {disc.speed && disc.glide && disc.turn && disc.fade
              ? `${disc.speed} ${disc.glide} ${disc.turn} ${disc.fade}`
              : null}
          </span>
        </div>
      </div>
  );
}
