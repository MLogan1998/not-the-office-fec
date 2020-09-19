import React from 'react';
import { Link } from 'react-router-dom';

import './WatchMovie.scss';

class WatchMovie extends React.Component {
  watchedClickEvent = (e) => {
    e.preventDefault();
    const { movie, updateMovie } = this.props;

    const updatedMovie = {
      poster_path: movie.poster_path,
      title: movie.title,
      uid: movie.uid,
      watched: true,
      movieId: movie.movieId,
      character: movie.character,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview,
    };
    updateMovie(movie.id, updatedMovie);
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { movie, deleteMovie } = this.props;
    deleteMovie(movie.id);
  }

  render() {
    const { movie } = this.props;
    const movieUrl = `https://image.tmdb.org/t/p/w154${movie.poster_path}`;
    const singleLink = `/watchlist/${movie.id}`;
    return (
      <div>
      {
        movie.watched ? (
          <div className="card-m">
            <div id="watched" className="overlay card">
              <img className="card-img-top watch-movie" src={movieUrl} alt={movie.title}></img>
              <div className="card-footer">
                <i className="fas fa-eye"></i>
                <i className="fas fa-info-circle"></i>
                <i className="far fa-trash-alt"></i>
              </div>
            </div>
          </div>
        ) : (
          <div className="card card-m">
            <div className="watch-movie">
            <img className="card-img-top" src={movieUrl} alt={movie.title}></img>
            </div>
            <div className="card-footer">
              <i className="fas fa-eye unwatched-eye orange" onClick={this.watchedClickEvent}></i>
              <Link to={singleLink}><i className="fas fa-info-circle orange"></i></Link>
              <i className="far fa-trash-alt unwatched-trash orange" onClick={this.deleteEvent}></i>
            </div>
          </div>
        )
      }
      </div>
    );
  }
}

export default WatchMovie;
