import React from 'react';
import moment from 'moment';

import quoteData from '../../../helpers/data/quoteData';
import authData from '../../../helpers/data/authData';
import watchlistData from '../../../helpers/data/watchlistData';

import './RandomMovie.scss';

class RandomMovie extends React.Component {
  state = {
    quote: {},
    officeCharacter: {},
    watchlist: false,
  }

  componentDidMount() {
    this.getQuote();
    this.getChar();
    this.watchlistCheck();
  }

  watchlistCheck = () => {
    const { movie } = this.props;
    watchlistData.getWatchlistByMovieId(movie.id)
      .then((res) => {
        if (res.length > 0) {
          this.setState({ watchlist: true });
        }
      })
      .catch((err) => console.error(err));
  }

  watchlistClick = (e) => {
    e.preventDefault();
    const { movie } = this.props;
    const newMovie = {
      poster_path: movie.poster_path,
      title: movie.title,
      watched: false,
      uid: authData.getUid(),
      movieId: movie.id,
      character: movie.character,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview,
    };
    watchlistData.addMovie(newMovie)
      .then(() => {
        this.watchlistCheck();
      })
      .catch((err) => console.error(err));
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

  getChar = () => {
    const { movie } = this.props;
    quoteData.getOfficeCharByCharId(movie.quoteId)
      .then((character) => this.setState({ officeCharacter: character[0] }))
      .catch((err) => console.error(err));
  }

  render() {
    const { movie } = this.props;
    const { quote, officeCharacter, watchlist } = this.state;
    const movieUrl = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
    const cleanDate = moment(movie.release_date).format('MMM Do, YYYY');

    return (
      <div className="container">
        <div className="flip-container item-a">
          <div className="flipper">
            <div className="front">
              <img className="posterimg" src={movieUrl} alt={movie.title}></img>
            </div>
            <div className="back backDetails">
              <blockquote className="blockquote"><p>{quote.quote}</p>
                <footer>
                  <cite>
                    {officeCharacter.character}
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="item-b">
          {
            watchlist ? (
              <button className="btn btn-secondary mt-2" disabled><i className="fas fa-check mr-2"></i>Add to Watchlist</button>
            ) : (
              <button className="btn btn-secondary mt-2" onClick={this.watchlistClick}><i className="fas fa-eye mr-2 orange"></i>Add to Watchlist</button>
            )
          }
        </div>
        <div className="item-d">
          <h5>{movie.title}</h5>
          <p><i className="fas fa-user-alt mr-2 orange"></i>{movie.character}</p>
          <p><i className="fas fa-calendar-alt mr-2 orange"></i>{cleanDate}</p>
          <p><i className="fas fa-star mr-2 orange"></i>{movie.vote_average}</p>
        </div>
        <div className="item-f">
          <h6 className="orange">Overview</h6>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  }
}

export default RandomMovie;
