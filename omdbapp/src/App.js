import React, { Component } from 'react';
import './App.css';
import SearchMovies from './SearchMovies/SearchMovies';
import DiscoverMovies from './DiscoverMovies/DiscoverMovies';
import PopularMovies from './PopularMovies/PopularMovies';
import RatedRMovies from './RatedRMovies/RatedRMovies';
import PopularKidsMovies from './PopularKidsMovies/PopularKidsMovies';
import BestDramaMovies from './BestDramaMovies/BestDramaMovies';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">MovieDB</h1>
          <p className="lead">Information about any movie released in any year to help you choose the right one to watch !</p>
          <ul className="nav nav-pills nav-justified" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="pill" href="#searchMovies" role="tab">Search Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#discoverMovies" role="tab">Discover Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#popularMovies" role="tab">Popular Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#ratedRMovies" role="tab">Rated R Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#kidsPopularMovies" role="tab">Kids Popular Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#bestDramaMovies" role="tab">Best Drama Movies</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="searchMovies" role="tabpanel">
            <SearchMovies />
          </div>
          <div className="tab-pane fade" id="discoverMovies" role="tabpanel">
          <DiscoverMovies />
          </div>
          <div className="tab-pane fade" id="popularMovies" role="tabpanel">
            <PopularMovies />
          </div>
          <div className="tab-pane fade" id="ratedRMovies" role="tabpanel">
            <RatedRMovies />
          </div>
          <div className="tab-pane fade" id="kidsPopularMovies" role="tabpanel">
            <PopularKidsMovies />
          </div>
          <div className="tab-pande fade" id="bestDramaMovies" role="tabpanel">
            <BestDramaMovies />
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default App;
