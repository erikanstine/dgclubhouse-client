import './rounds.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Round from '../../components/round/Round';

import { Rounds as dummyRounds } from '../../dummyDiscData';

export default function Rounds() {
  return (
    <>
      <Topbar />
      <div className='roundsContainer'>
        <Sidebar submenu='rounds' />
        <div className='roundsCenter'>
          <div className='roundsTitle'>Your rounds</div>
          <div className='roundsListContainer'>
            {dummyRounds.map((r) => (
              <Round key={r.id} round={r} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
