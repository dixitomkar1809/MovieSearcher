import React, { Component } from 'react';
import '../App.css';
import Items from '../items/items';
import axios from 'axios';

class SearchMovies extends Component{
    constructor(props){
        super(props);
        this.state = {searchInput:'', searchMovies:[] }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.submitButtonSearch = this.submitButtonSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearchChange(event){
        // console.log(event);
        this.setState({
          searchInput: event.target.value
        });
    }

    submitButtonSearch(){
        return this.state.searchInput===''
    }

    handleSubmit(event){
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&query="+this.state.searchInput)
        .then(res => {
          console.log(res);
          this.setState({
            searchMovies: res.data.results
          })
        })
        event.preventDefault();
    }
   
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-10 col-sm-10 col-8">
                        <input type="text" className="form-control" placeholder="Search..." value={this.state.searchInput} onChange={this.handleSearchChange}/>
                      </div>
                      <div className="col-md-2 col-sm-2 col-2">
                        <input className="btn btn-primary" type="Submit" disabled={this.submitButtonSearch()} />
                      </div>
                    </div>
                  </div>
                </form>
                <hr/>
                {this.state.searchMovies.map((item, index) => 
                  ( item.backdrop_path?
                    <Items key={index} rating={item.vote_average} title={item.title} poster={item.poster_path} release_date={item.release_date} backdrop_path={item.backdrop_path} overview={item.overview} genre={item.genre_ids} /> : null
                  )
                )}
            </div>
        )
    } 
}

export default SearchMovies;