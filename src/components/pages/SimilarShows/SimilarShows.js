import React from 'react';

import './SimilarShows.scss';

class SimilarShows extends React.Component {
  render() {
    const { show } = this.props;
    const simPoster = `https://image.tmdb.org/t/p/w342${show.poster_path}`;
    return (
      <div className="sim-show">
        <img src={simPoster} alt={show.name} />
        <p><span className="font-weight-bold white">{show.name}</span> <i className="fas fa-star mr-1 ml-3 orange"></i>{show.vote_average}</p>
      </div>
    );
  }
}

export default SimilarShows;
