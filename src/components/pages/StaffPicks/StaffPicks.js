import React from 'react';
import { Link } from 'react-router-dom';

import tvData from '../../../helpers/data/tvData';

import PopularTV from '../PopularTV/PopularTV';
import SimilarShows from '../SimilarShows/SimilarShows';

import './StaffPicks.scss';

class StaffPicks extends React.Component {
  state = {
    popularTV: [],
    similarTV: [],
  }

  componentDidMount() {
    this.getPopShows();
    this.getSimilarShows();
  }

  getPopShows = () => {
    tvData.getPopularTV()
      .then((response) => {
        const popShows = response.slice(0, 5);
        this.setState({ popularTV: popShows });
      })
      .catch((err) => console.error(err));
  }

  getSimilarShows = () => {
    tvData.getSimilarTV()
      .then((response) => {
        const fullArr = response;
        const randomShows = [];
        for (let i = 0; i < 5; i += 1) {
          const index = Math.floor(Math.random() * fullArr.length);
          randomShows.push(fullArr[index]);
          fullArr.splice(index, 1);
        }
        this.setState({ similarTV: randomShows });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { popularTV, similarTV } = this.state;
    const popularShows = popularTV.map((show) => <PopularTV key={show.id} show={show} />);
    const similarShows = similarTV.map((show) => <SimilarShows key={show.id} show={show} />);

    const goBack = '/watchlist';
    return (
      <div className="staff-wrapper">
        <h4 className="staff-h4"><span className="orange">You're free!</span> Let us introduce you to some of our <span className="orange">favorite content.</span></h4>
        <div className="doc-wrapper">
          <Link to={goBack} className="back-link"><i class="fas fa-hand-point-left orange"></i><h6>Back to Watchlist</h6></Link>
        </div>
        <div className="popular-wrapper">
          <div className="discover-heading">
            <h2><span className="orange">Popular</span> TV Shows</h2>
          </div>
          <div className= "pop-wrapper">
            {popularShows}
          </div>
        </div>
        <div className="popular-wrapper">
          <div className="discover-heading">
            <h2><span className="orange">Similar</span> TV Shows</h2>
          </div>
          <div className= "pop-wrapper">
            {similarShows}
          </div>
        </div>
      </div>
    );
  }
}

export default StaffPicks;
