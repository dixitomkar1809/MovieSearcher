import React, {Component} from 'react';
import '../genre/genre.css';

class Genre extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h5><span class="badge badge-secondary">{this.props.genre}</span></h5>
        )
    }
}
export default Genre;