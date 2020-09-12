import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import connection from '../helpers/data/connection';

import './App.scss';

connection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  signOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  signIn = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        {
          authed ? (
            <button className="btn btn-secondary" onClick={this.signOut}>Log Out</button>
          ) : (
            <button className="btn btn-secondary" onClick={this.signIn}> Log In</button>
          )
        }
      </div>
    );
  }
}

export default App;
