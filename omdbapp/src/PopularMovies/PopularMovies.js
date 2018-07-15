import React, { Component } from 'react';
import '../App.css';
import Items from '../items/items';
import axios from 'axios';

class PopularMovies extends Component {
    constructor(props){
        super(props);
        this.state = {popularMovies:[]};
        this.getMostPopularMovies();
    }
    
    getMostPopularMovies(event){
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&sort_by=popularity.desc')
        .then(res=> {
          this.setState({
            popularMovies: res.data.results
          })
        })
    }

    render(){
        return(
            <div>
            {this.state.popularMovies.map((item, index) => 
              (<Items key={index} title={item.title} poster={item.poster_path} release_date={item.release_date} backdrop_path={item.backdrop_path} overview={item.overview} genre={item.genre_ids} />)
            )}
          </div>
        )
    }
}

export default PopularMovies;