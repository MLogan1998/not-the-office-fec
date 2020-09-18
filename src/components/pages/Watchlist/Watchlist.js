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
        <h2 className="orange">Watchlist</h2>
        <div className="progress">
        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={progressStyle} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="list-wrapper">
          {listMovies}
        </div>
      </div>
    );
  }
}

export default Watchlist;
