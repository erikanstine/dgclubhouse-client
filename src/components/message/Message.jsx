import './message.css';
import {format} from 'timeago.js';

export default function Message({ message, own }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={own? 'message own': 'message'}>
      <div className='messageTop'>
        <img src={PF + '/people/simon.jpeg'} alt='' className='messageImg' />
      </div>
      <p className='messageText'>
       {message.text}
      </p>
      <div className='messageBottom'>{format(message.createdAt)}</div>
    </div>
  );
}
