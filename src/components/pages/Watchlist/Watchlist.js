import React from 'react';
import PropTypes from 'prop-types';

import WatchMovie from '../WatchMovie/WatchMovie';

import './Watchlist.scss';

class Watchlist extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  render() {
    return (
      <div>
        <h4>Watchlist Component</h4>
        <WatchMovie />
      </div>
    );
  }
}

export default Watchlist;
