import React, { Component } from 'react';
import '../App.css';
import Items from '../items/items';
import axios from 'axios';

class PopularKidsMovies extends Component{

    constructor(props){
        super(props);
        this.state = {kidsPopularMovies:[]};
        // this.getMostPopularKidsMovies();
    }

    componentDidMount(){
        // this.state = {kidsPopularMovies:[]};
        this.getMostPopularKidsMovies();
    }
    
    getMostPopularKidsMovies(event){
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&certification_country=US&certification.lte=G&sort_by=popularity.desc')
        .then(res => {
            this.setState({
                kidsPopularMovies: res.data.results
            })
        })
    }
    
    render(){
        return(
            <div>
                {this.state.kidsPopularMovies.map((item, index) => 
                (item.backdrop_path?
                    <Items key={index} rating={item.vote_average} title={item.title} poster={item.poster_path} release_date={item.release_date} backdrop_path={item.backdrop_path} overview={item.overview} genre={item.genre_ids} /> : null)
                )}
            </div>
        )
    }
}

export default PopularKidsMovies;