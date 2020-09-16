import React from 'react';

import quoteData from '../../../helpers/data/quoteData';

import './RandomMovie.scss';

class RandomMovie extends React.Component {
  state = {
    quote: {},
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    const { movie } = this.props;
    quoteData.getQuotesByCharId(movie.quoteId)
      .then((quotes) => {
        const arrLength = quotes.length;
        const index = Math.floor(Math.random() * arrLength);
        const quote = quotes[index];
        this.setState({ quote });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { movie } = this.props;
    const { quote } = this.state;
    const movieUrl = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;

    return (
      <div className="container">
        <div className="flip-container item-a">
          <div className="flipper">
            <div className="front">
              <img className="posterimg" src={movieUrl} alt={movie.title}></img>
            </div>
            <div className="back backDetails">
              <h5>{movie.title}</h5>
              <p>{quote.quote}</p>
            </div>
          </div>
        </div>
        <div className="item-b">
          <button className="btn btn-secondary mt-2" disabled onClick={this.watchlistClick}><i className="fas fa-eye mr-2"></i>Add to Watchlist</button>
        </div>
        <div className="item-d">
          <h5>{movie.title}</h5>
          <p><i className="fas fa-user-alt mr-2 orange"></i>{movie.character}</p>
          <p><i className="fas fa-calendar-alt mr-2 orange"></i>{movie.release_date}</p>
          <p><i className="fas fa-star mr-2 orange"></i>{movie.vote_average}</p>
        </div>
        <div className="item-f">
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  }
}

export default RandomMovie;
