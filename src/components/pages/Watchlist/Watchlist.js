import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import WatchMovie from '../WatchMovie/WatchMovie';
import ProgressBar from './ProgressBar/ProgressBar';

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

  filterByWatched = (item) => {
    if (item.watched) {
      return true;
    }
    return '';
  }

  progress = () => {
    watchlistData.getWatchlistByUid(authData.getUid())
      .then((watchlist) => {
        const progress = watchlist.filter(this.filterByWatched);
        let progressNum = progress.length * 10;
        if (progressNum >= 100) {
          progressNum = 100;
        }
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

  deleteMovie = (movieId) => {
    watchlistData.deleteMovie(movieId)
      .then(() => {
        this.getWatchlist();
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { watchlist, progress } = this.state;
    const listMovies = watchlist.map((movie) => <WatchMovie key={movie.id} movie={movie} updateMovie={this.updateMovie} deleteMovie={this.deleteMovie} />);
    const staffpicks = '/staff-picks';

    return (
      <div>
        <h4 className="progressh4">Track your <span className="pro-res">progress.</span> <span className="orange give-up">Never give up.</span></h4>
        <ProgressBar progress={progress}/>
        {
          progress < 100 ? (
            <div className="doc-wrapper mt-1 mb-4">
            <i className="fas fa-prescription orange"></i>
            <h6>Doctors reccomend <span className="orange">watching 10 movies</span> to completely break the cycle.</h6>
          </div>
          ) : (
            <div className="doc-wrapper mt-1 mb-4">
            <h6><span className="green">Congratulations!</span> You have broken the cycle. You are ready to check out our <Link to={staffpicks} className="green watch-link"><u>Staff Picks.</u></Link></h6>
          </div>
          )
        }
        <div className="list-wrapper">
          {listMovies}
        </div>
      </div>
    );
  }
}

export default Watchlist;
