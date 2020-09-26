import React from 'react';

import './SimilarShows.scss';

class SimilarShows extends React.Component {
  render() {
    const { show } = this.props;
    const simPoster = `https://image.tmdb.org/t/p/w342${show.poster_path}`;
    return (
      <div className="sim-show">
        <img src={simPoster} alt={show.name} />
        <h6>{show.name}</h6>
        <h6><i className="fas fa-star mr-2 orange"></i>{show.vote_average}</h6>
      </div>
    );
  }
}

export default SimilarShows;
