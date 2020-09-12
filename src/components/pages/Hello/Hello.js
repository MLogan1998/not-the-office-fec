import React from 'react';
import PropTypes from 'prop-types';

import './Hello.scss';

class Hello extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <h4>Hello Component</h4>
    );
  }
}

export default Hello;
