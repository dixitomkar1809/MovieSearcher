import React, { Component } from 'react';
import './App.css';
import Items from './items/items';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {searchInput:'', searchMovies: [], popularMovies:[], ratedRMovies:[], kidsPopularMovies:[], bestDramaMovies:[]};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMostPopularMovies();
    this.getHighestRatedMoviesRatedR();
    this.getMostPopularKidsMovies();
    this.getBestDramaMovies();
  }

  handleChange(event){
    this.setState({
      searchInput: event.target.value
    });
  }

  handleSubmit(event){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&query='+this.state.searchInput)
    .then(res => {
      this.setState({
        searchMovies: res.data.results
        // genre: res.data.results.genre_ids
      })
    })
    event.preventDefault();
  }

  getMostPopularMovies(event){
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&sort_by=popularity.desc')
    .then(res=> {
      this.setState({
        popularMovies: res.data.results
      })
    })
  }

  getHighestRatedMoviesRatedR(event){
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&certification_country=US&certification=R&sort_by=vote_average.desc')
    .then(res => {
      this.setState({
        ratedRMovies: res.data.results
      })
    })
  }

  getMostPopularKidsMovies(event){
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&certification_country=US&certification.lte=G&sort_by=popularity.desc')
    .then(res => {
      this.setState({
        kidsPopularMovies: res.data.results
      })
    })
  }

  getBestDramaMovies(event){
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10')
    .then(res=> {
      this.setState({
        bestDramaMovies:res.data.results
      })
    })
  }

  render() {
    return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">MovieDB</h1>
          <p className="lead">Information about any movie released in any year with its IMDB rating, to help you choose the right one to watch !</p>
          <ul className="nav nav-pills nav-justified" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="pill" href="#searchMovies" role="tab">Search Movies</a>
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
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search..." value={this.state.searchInput} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <input className="form-control" type="Submit" placeholder="Search" />
              </div>
            </form>
            <hr/>
            {this.state.searchMovies.map((item, index) => 
              (<Items key={index} title={item.title} poster={item.poster_path} release_date={item.release_date} backdrop_path={item.backdrop_path} overview={item.overview} genre={item.genre_ids} />)
            )}
          </div>
          <div className="tab-pane fade" id="popularMovies" role="tabpanel">
            {this.state.popularMovies.map((item, index) => 
              (<Items key={index} title={item.title} poster={item.poster_path} release_date={item.release_date} backdrop_path={item.backdrop_path} overview={item.overview} genre={item.genre_ids} />)
            )}
          </div>
          <div className="tab-pane fade" id="ratedRMovies" role="tabpanel">
            {this.state.ratedRMovies.map((item, index) => 
              (<Items key={index} title={item.title} poster={item.poster_path} release_date={item.release_date} backdrop_path={item.backdrop_path} overview={item.overview} genre={item.genre_ids} />)
            )}
          </div>
          <div className="tab-pane fade" id="kidsPopularMovies" role="tabpanel1">
            {this.state.kidsPopularMovies.map((item, index) => 
              (<Items key={index} title={item.title} poster={item.poster_path} release_date={item.release_date} backdrop_path={item.backdrop_path} overview={item.overview} genre={item.genre_ids} />)
            )}
          </div>
          <div className="tab-pande fade" id="bestDramaMovies" role="tabpanel1">
            {this.state.bestDramaMovies.map((item, index) => 
              (<Items key={index} title={item.title} poster={item.poster_path} release_date={item.release_date} backdrop_path={item.backdrop_path} overview={item.overview} genre={item.genre_ids} />)
            )}
          </div>
        </div>
        
      </div>
    </div>
    );
  }
}
export default App;
