import React from 'react';
import PropTypes from 'prop-types';

import CharacterIcons from '../CharacterIcons/CharacterIcons';
import RandomMovie from '../RandomMovie/RandomMovie';

import './Generator.scss';

class Generator extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
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
