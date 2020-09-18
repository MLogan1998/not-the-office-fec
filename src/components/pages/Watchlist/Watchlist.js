import React from 'react';
import PropTypes from 'prop-types';

import WatchMovie from '../WatchMovie/WatchMovie';

import watchlistData from '../../../helpers/data/watchlistData';
import authData from '../../../helpers/data/authData';

import './Watchlist.scss';

class Watchlist extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  state = {
    watchlist: [],
    progress: 0,
  }

  componentDidMount() {
    this.getWatchlist();
    this.progress();
  }

  getWatchlist = () => {
    watchlistData.getWatchlistByUid(authData.getUid())
      .then((watchlist) => this.setState({ watchlist }))
      .catch((err) => console.error(('couldnt get stuff', err)));
  }

  filterByID = (item) => {
    if (item.watched) {
      return true;
    }
    return '';
  }

  progress = () => {
    watchlistData.getWatchlistByUid(authData.getUid())
      .then((watchlist) => {
        const progress = watchlist.filter(this.filterByID);
        const progressNum = progress.length * 10;
        this.setState({ progress: progressNum });
      })
      .catch((err) => console.error(err));
  }

  updateMovie = (movieId, editedMovie) => {
    watchlistData.updateMovie(movieId, editedMovie)
      .then(() => {
        this.getWatchlist();
        this.progress();
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { watchlist, progress } = this.state;
    const progressStyle = { width: `${progress}%` };
    const listMovies = watchlist.map((movie) => <WatchMovie key={movie.id} movie={movie} updateMovie={this.updateMovie} />);
    return (
      <div>
        <h4 className="progressh4">Track your progress. <span className="orange">Never give up.</span></h4>
        <div className="progress">
        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={progressStyle} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
        </div>
        <div className="doc-wrapper mt-1 mb-4">
        <i class="fas fa-prescription orange"></i>
          <h6>Doctors reccomend <span className="orange">watching 10 movies</span> to completely break the cycle.</h6>
        </div>
        <div className="list-wrapper">
          {listMovies}
        </div>
      </div>
    );
  }
}

export default Watchlist;
