import React from 'react';
import PropTypes from 'prop-types';

import movieData from '../../../helpers/data/movieData';
import quoteData from '../../../helpers/data/quoteData';

import CharacterIcons from '../CharacterIcons/CharacterIcons';
import RandomMovie from '../RandomMovie/RandomMovie';

import './Generator.scss';

class Generator extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  state = {
    movies: [],
  }

  componentDidMount() {
    this.msMovies();
    this.getQuote();
  }

  msMovies = () => {
    movieData.getCharMovies(4495)
      .then((movies) => {
        this.setState({ movies });
      })
      .catch((err) => console.error(err));
  }

  getQuote = () => {
    quoteData.getQuotesByCharId(4495)
      .then((response) => {
        console.error(response);
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <h4>Generator</h4>
        <CharacterIcons />
        <RandomMovie />
      </div>
    );
  }
}

export default Generator;
