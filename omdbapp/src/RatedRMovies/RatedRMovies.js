import React, { Component } from 'react';
import '../App.css';
import Items from '../items/items';
import axios from 'axios';

class RatedRMovies extends Component {
    
    constructor(props){
        super(props);
        // this.getRatedRMovies();
        this.state = {ratedRMovies:[]}
    }

    componentDidMount(){
        this.getRatedRMovies();
        // this.state = {ratedRMovies:[]}
    }
    
    getRatedRMovies(event){
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&certification_country=US&certification=R&sort_by=vote_average.desc')
        .then(res => {
          this.setState({
            ratedRMovies: res.data.results
          })
        })
    }

    render(){
        return(
            <div>
                {this.state.ratedRMovies.map((item, index) => 
                (item.backdrop_path?
                    <Items key={index} rating={item.vote_average} title={item.title} poster={item.poster_path} release_date={item.release_date} backdrop_path={item.backdrop_path} overview={item.overview} genre={item.genre_ids} /> : null)
                )}
            </div>
        )
    }
}

export default RatedRMovies;