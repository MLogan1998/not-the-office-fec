import React from 'react';

import './PopularTV.scss';

class PopularTV extends React.Component {
  render() {
    const { show } = this.props;
    const popPoster = `https://image.tmdb.org/t/p/w342${show.poster_path}`;
    return (
      <div className="pop-show">
        <img src={popPoster} alt={show.name} />
        <h6>{show.name}</h6>
        <h6><i className="fas fa-star mr-2 orange"></i>{show.vote_average}</h6>
      </div>
    );
  }
}

export default PopularTV;
