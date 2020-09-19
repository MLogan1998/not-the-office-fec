/* eslint-disable max-len */
import React from 'react';

import './ProgressBar.scss';

class ProgressBar extends React.Component {
  render() {
    const { progress } = this.props;
    const progressStyle = { width: `${progress}%` };
    return (
      <div className="progress">
        {
          progress < 100 ? (
            <div className="progress-bar progress-bar-striped moreProgress" role="progressbar" style={progressStyle} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
          ) : (
            <div className="progress-bar progress-bar-striped progressComplete" role="progressbar" style={progressStyle} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
          )
        }
      </div>
    );
  }
}

export default ProgressBar;
