import React from 'react';

import './CharacterIcons.scss';

class CharacterIcons extends React.Component {
  msClickEvent = (e) => {
    const { msMovies } = this.props;
    e.preventDefault();
    msMovies();
  }

  dsClickEvent = (e) => {
    const { dsMovies } = this.props;
    e.preventDefault();
    dsMovies();
  }

  kkClickEvent = (e) => {
    const { kkMovies } = this.props;
    e.preventDefault();
    kkMovies();
  }

  jhClickEvent = (e) => {
    const { jhMovies } = this.props;
    e.preventDefault();
    jhMovies();
  }

  pbClickEvent = (e) => {
    const { pbMovies } = this.props;
    e.preventDefault();
    pbMovies();
  }

  abClickEvent = (e) => {
    const { abMovies } = this.props;
    e.preventDefault();
    abMovies();
  }

  render() {
    return (
      <div className="character-icons">
      <img src="https://i.imgur.com/5gLTKS2.jpg" alt="michael-scott-icon" onClick={this.msClickEvent}></img>
      <img src="https://i.imgur.com/XPdhBoH.jpg" alt="dwight-schrute-icon" onClick={this.dsClickEvent}></img>
      <img src="https://i.imgur.com/1bdD2lC.jpg" alt="kelly-kapoor-icon" onClick={this.kkClickEvent}></img>
      <img src="https://i.imgur.com/ZGI2djt.jpg" alt="jim-halper-icon" onClick={this.jhClickEvent}></img>
      <img src="https://i.imgur.com/Y5BG9pA.jpg" alt="pam-beasley-icon" onClick={this.pbClickEvent}></img>
      <img src="https://i.imgur.com/AOrf8TO.jpg" alt="andy-bernard-icon" onClick={this.abClickEvent}></img>
      </div>
    );
  }
}

export default CharacterIcons;
