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
  }

  componentDidMount() {
    this.getWatchlist();
  }

  getWatchlist = () => {
    watchlistData.getWatchlistByUid(authData.getUid())
      .then((watchlist) => this.setState({ watchlist }))
      .catch((err) => console.error(('couldnt get stuff', err)));
  }

  updateMovie = (movieId, editedMovie) => {
    watchlistData.updateMovie(movieId, editedMovie)
      .then(() => this.getWatchlist())
      .catch((err) => console.error(err));
  }

  render() {
    const { watchlist } = this.state;
    const listMovies = watchlist.map((movie) => <WatchMovie key={movie.id} movie={movie} updateMovie={this.updateMovie} />);
    return (
      <div>
        <h2 className="orange">Watchlist</h2>
        <div className="list-wrapper">
          {listMovies}
        </div>
      </div>
    );
  }
}

export default Watchlist;
