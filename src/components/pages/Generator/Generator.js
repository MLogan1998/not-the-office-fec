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

  msMovies = () => {
    movieData.getCharMovies(4495)
      .then((movies) => {
        this.setState({ movies });
      })
      .catch((err) => console.error(err));
  }

  dsMovies = () => {
    movieData.getCharMovies(11678)
      .then((movies) => {
        this.setState({ movies });
      })
      .catch((err) => console.error(err));
  }

  kkMovies = () => {
    movieData.getCharMovies(125167)
      .then((movies) => {
        this.setState({ movies });
      })
      .catch((err) => console.error(err));
  }

  jhMovies = () => {
    movieData.getCharMovies(17697)
      .then((movies) => {
        this.setState({ movies });
      })
      .catch((err) => console.error(err));
  }

  abMovies = () => {
    movieData.getCharMovies(27105)
      .then((movies) => {
        this.setState({ movies });
      })
      .catch((err) => console.error(err));
  }

  pbMovies = () => {
    movieData.getCharMovies(51856)
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
      <div className="generator-wrapper">
        <h4>Click on your <span className="orange">favorite</span> character.</h4>
        <CharacterIcons msMovies={this.msMovies} dsMovies={this.dsMovies} kkMovies={this.kkMovies} jhMovies={this.jhMovies} pbMovies={this.pbMovies} abMovies={this.abMovies}/>
        <RandomMovie />
      </div>
    );
  }
}

export default Generator;
