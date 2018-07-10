import React, { Component } from 'react';
import './App.css';
import Items from './items/items';
import axios from 'axios';

class App extends Component {

  movieGenre = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

  constructor(props){
    super(props);
    this.state = {searchInput:'', releaseYear:'', genre:'' ,searchMovies: [], popularMovies:[], ratedRMovies:[], kidsPopularMovies:[], bestDramaMovies:[], discoveredMovies:[]};
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDiscover = this.handleDiscover.bind(this);
    this.getMostPopularMovies();
    this.getHighestRatedMoviesRatedR();
    this.getMostPopularKidsMovies();
    this.getBestDramaMovies();
    this.submitButtonSearch();
    this.submitButtonDiscover();
  }

  handleSearchChange(event){
    // console.log(event);
    this.setState({
      searchInput: event.target.value
    });
  }

  handleYearChange(event){
    // console.log(event);
    this.setState({
      releaseYear:event.target.value
    })
  }

  handleGenreChange(event){
    // console.log(event);
    this.setState({
      genre: event.target.value
    })
  }

  handleSubmit(event){
    // need to change the search feature as its not working the search bar just gives the discovered movies and not the actual search results 
    // maybe change the api to search not the discover one base on conditions
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&query="+this.state.searchInput)
    .then(res => {
      console.log(res);
      this.setState({
        searchMovies: res.data.results
      })
    })
    event.preventDefault();
  }

  handleDiscover(event){
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&primary_release_year="+this.state.releaseYear+"&with_genres="+this.state.genre)
    .then(res => {
      this.setState({
        discoveredMovies: res.data.results
      })
    })
    event.preventDefault();
  }

  submitButtonSearch(){
    return this.state.searchInput===''
  }

  submitButtonDiscover(){
    return this.state.releaseYear==='' && this.state.genre===''
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
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-10">
                    <input type="text" className="form-control" placeholder="Search..." value={this.state.searchInput} onChange={this.handleSearchChange}/>
                  </div>
                  <div className="col-md-2">
                    <input className="btn btn-primary" type="Submit" disabled={this.submitButtonSearch()} />
                  </div>
                </div>
              </div>
            </form>
            <hr/>
            {this.state.searchMovies.map((item, index) => 
              (<Items key={index} title={item.title} poster={item.poster_path} release_date={item.release_date} backdrop_path={item.backdrop_path} overview={item.overview} genre={item.genre_ids} />)
            )}
          </div>
          <div className="tab-pane fade" id="discoverMovies" role="tabpanel1">
            <form onSubmit={this.handleDiscover}>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-2">
                    <input type="text" className="form-control" placeholder="Release Year" value={this.state.releaseYear} onChange={this.handleYearChange} />                  
                  </div>
                  <div className="col-md-2">
                    <select onChange={this.handleGenreChange} className="form-control">
                      <option selected disabled>Select Genre</option>
                      {this.movieGenre.map(((item, index) => (<option key={index} value={item.id}>{item.name}</option>)))}
                  </select>
                  </div>
                  <div className="col-md-2">
                    <input className="btn btn-primary" type="Submit" disabled={this.submitButtonDiscover()} />
                  </div>
                </div>
              </div>
            </form>
            <hr/>
            {this.state.discoveredMovies.map((item, index) => 
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
