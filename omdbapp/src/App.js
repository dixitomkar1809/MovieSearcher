import React, { Component } from 'react';
import './App.css';
import Items from './items/items';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {searchInput:'', movies: [], genre: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // axios.get('https://api.themoviedb.org/3/search/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&query=sanju')
    // .then(res => {
    //   console.log(res);
    // })
  }

  handleChange(event){
    this.setState({
      searchInput: event.target.value
    });
    // console.log(this.state.searchInput);
  }

  handleSubmit(event){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&query='+this.state.searchInput)
    .then(res => {
      console.log(res.data);
      this.setState({
        movies: res.data.results,
        genre: res.data.results.genre_ids
      })
    })
    event.preventDefault();
  }

  getMostPopularMovies(event){

  }

  getHighestRatedMoviesRatedR(event){
  
  }

  getMostPopularKidsMovies(event){

  }

  getBestDramaMovies(event){

  }

  render() {
    return (
    <div className="container-fluid">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">MovieDB</h1>
          <p className="lead">Information about any movie released in any year with its IMDB rating, to help you choose the right one to watch !</p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search..." value={this.state.searchInput} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <input className="form-control" type="Submit" placeholder="Search" />
            </div>
          </form>
        </div>  
      </div>
      {this.state.movies.map((item, index) => 
        (<Items key={index} title={item.title} poster={item.poster_path} release_date={item.release_date} backdrop_path={item.backdrop_path} overview={item.overview} genre={item.genre_ids} />)
      )}
    </div>
    );
  }
}
export default App;
