import React, { Component } from 'react';
import '../App.css';
import Items from '../items/items';
import axios from 'axios';

class DiscoverMovies extends Component{
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
        this.state = { releaseYear:'', genre:'', discoveredMovies:[]}
        this.handleDiscover = this.handleDiscover.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
    }

    handleYearChange(event){
        this.setState({
          releaseYear:event.target.value
        })
    }
    
    handleGenreChange(event){
        this.setState({
          genre: event.target.value
        })
    }

    submitButtonDiscover(){
        return this.state.releaseYear==='' && this.state.genre===''
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

    render(){
        return(
            <div>
                <form onSubmit={this.handleDiscover}>
                <div className="form-group">
                    <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2 col-sm-4 col-4">
                        <input type="text" className="form-control" placeholder="Year" value={this.state.releaseYear} onChange={this.handleYearChange} />                  
                    </div>
                    <div className="col-md-2 col-sm-4 col-4 ">
                        <select onChange={this.handleGenreChange} className="form-control">
                        {this.movieGenre.map(((item, index) => (<option key={index} value={item.id}>{item.name}</option>)))}
                        </select>
                    </div>
                    <div className="col-md-2 col-sm-4 col-4">
                        <input className="btn btn-primary" type="Submit" disabled={this.submitButtonDiscover()} />
                    </div>
                    </div>
                </div>
                </form>
                <hr/>
                {this.state.discoveredMovies.map((item, index) => 
                  (item.backdrop_path?
                    <Items key={index} rating={item.vote_average} title={item.title} poster={item.poster_path} release_date={item.release_date} backdrop_path={item.backdrop_path} overview={item.overview} genre={item.genre_ids} /> : null
                  )
                )}
            </div>
        )
    }
    
}

export default DiscoverMovies;