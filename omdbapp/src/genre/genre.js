import React, {Component} from 'react';
import '../genre/genre.css';

class Genre extends Component {
    genre = [
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
        this.state = {genreName:''}
        for (var i=0;i<this.genre.length;i++){
            if(this.genre[i].id==this.props.genre){
                this.state.genreName = this.genre[i].name;
            }
        }
        if(this.state.genreName==''){
            this.state.genreName = 'Not Available';
        }
    }

    render(){
        return(
            <span className="badge badge-secondary genre">{this.state.genreName}</span>
        )
    }
}
export default Genre;