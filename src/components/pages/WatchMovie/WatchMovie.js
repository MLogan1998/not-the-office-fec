import React from 'react';

import './WatchMovie.scss';

class WatchMovie extends React.Component {
  render() {
    const { movie } = this.props;
    const movieUrl = `https://image.tmdb.org/t/p/w154${movie.poster_path}`;
    return (
      <img className="watch-movie" src={movieUrl} alt={movie.title}></img>
    );
  }
}

export default WatchMovie;
