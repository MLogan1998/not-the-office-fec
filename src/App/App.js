import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import connection from '../helpers/data/connection';

import Navbar from '../components/pages/Navbar/Navbar';
import Hello from '../components/pages/Hello/Hello';
import RGenerator from '../components/pages/Generator/Generator';
import Watchlist from '../components/pages/Watchlist/Watchlist';
import SingleMovie from '../components/pages/SingleMovie/SingleMovie';

import './App.scss';

connection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

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

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Navbar authed={authed} />
            <div>
              <Switch>
                <Route path='/hello' render={(props) => <Hello authed={authed} {...props} />} />
                <PrivateRoute path="/watchlist/:movieId" component={SingleMovie} authed={authed} />
                <PrivateRoute path="/watchlist" component={Watchlist} authed={authed} />
                <PrivateRoute path="/generator" component={RGenerator} authed={authed} />
                <PublicRoute path="/auth" component={Hello} authed={authed} />
                <Redirect from="*" to="/hello" />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
