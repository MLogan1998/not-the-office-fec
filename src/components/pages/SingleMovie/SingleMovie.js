import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import watchlistData from '../../../helpers/data/watchlistData';

import './SingleMovie.scss';

class SingleMovie extends React.Component {
  state = {
    movie: {},
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    watchlistData.getMovieById(movieId)
      .then((res) => this.setState({ movie: res.data }))
      .catch((err) => console.error(err));
  }

  render() {
    const { movie } = this.state;
    const goBack = '/watchlist';
    const googleIt = `http://www.google.com/search?q=Where+to+stream+${movie.title}`;
    const movieUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const cleanDate = moment(movie.release_date).format('MMM Do, YYYY');

    return (
      <div className="single-wrapper">
        <h4 className="orange mt-3 sing-h4">{movie.title}</h4>
        <div className="doc-wrapper">
          <Link to={goBack} className="back-link"><i className="fas fa-hand-point-left orange"></i><h6>Back to Watchlist</h6></Link>
        </div>
        <div className="container mt-3">
          <div className="item-a">
            <img className="posterimg" src={movieUrl} alt={movie.title}></img>
          </div>
          <div className="item-d">
            <h5>{movie.title}</h5>
            <p><i className="fas fa-user-alt mr-2 orange"></i>{movie.character}</p>
            <p><i className="fas fa-calendar-alt mr-2 orange"></i>{cleanDate}</p>
            <p><i className="fas fa-star mr-2 orange"></i>{movie.vote_average}</p>
            <a href={googleIt} target="_blank" rel="noopener noreferrer" className="google-link"><i className="fab fa-google orange mr-2"></i><h6>Where to watch?</h6></a>
          </div>
          <div className="item-f">
            <h6 className="orange">Overview</h6>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleMovie;
