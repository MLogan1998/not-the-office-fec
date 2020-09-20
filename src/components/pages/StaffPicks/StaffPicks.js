import React from 'react';
import { Link } from 'react-router-dom';

import './StaffPicks.scss';

class StaffPicks extends React.Component {
  render() {
    const goBack = '/watchlist';
    return (
      <div className="staff-wrapper">
        <h4 className="staff-h4"><span className="orange">You're free!</span> Let us introduce you to some of our <span className="orange">favorite content.</span></h4>
        <div className="doc-wrapper">
          <Link to={goBack} className="back-link"><i class="fas fa-hand-point-left orange"></i><h6>Back to Watchlist</h6></Link>
        </div>
        <div className="pick-wrapper">
          <div className="pick">
            <img className="pick-img" src="https://i.imgur.com/PXUhKDG.jpg" alt="Yellowstone" />
            <h6 className="staff-streaming">Streaming on <span className="peacock">Peacock</span></h6>
          </div>
          <div className="pick">
            <img className="pick-img" src="https://i.imgur.com/aJTwaGS.jpg" alt="Watchmen" />
            <h6 className="staff-streaming">Streaming on <span className="hbo">HBO Max</span></h6>
          </div>
          <div className="pick">
            <img className="pick-img" src="https://i.imgur.com/Mjknsl0.jpg" alt="Cobra Kai" />
            <h6 className="staff-streaming">Streaming on <span className="netflix">NETFLIX</span></h6>
          </div>
        </div>
      </div>
    );
  }
}

export default StaffPicks;
