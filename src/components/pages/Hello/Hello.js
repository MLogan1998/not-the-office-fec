import React from 'react';
import PropTypes from 'prop-types';

import LpCarousel from './Carousel/Carousel';

import './Hello.scss';

class Hello extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <div className="home-wrapper">
        <h2>There are other options. Break the cycle.</h2>
        <LpCarousel />
      </div>
    );
  }
}

export default Hello;
