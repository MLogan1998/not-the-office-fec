import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import LpCarousel from './Carousel/Carousel';

import './Hello.scss';

class Hello extends React.Component {
  getStartedClick = (e) => {
    e.preventDefault();
    this.props.history.push('/generator');
  }

  signIn = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="home-wrapper">
        <h2>There are other options. <span className="orange">Break the cycle.</span></h2>
        <LpCarousel />
        <div className="lpText">
          <p>Welcome to <span className="blue">Not the Office Again</span>. The webpage for people who stream <span className="font-italic">The Office</span> everynight. Got a problem? <span className="font-weight-bold">Let us help.</span></p>
          {
            authed ? (
              <button className="btn btn-secondary orangebg font-weight-bold" onClick={this.getStartedClick}>Get Started!</button>
            ) : (
              <button className="btn btn-secondary" onClick={this.signIn}>Log In</button>
            )
          }
        </div>
      </div>
    );
  }
}

export default Hello;
