import React, {Component} from 'react';
import '../items/items.css';
import Genre from '../genre/genre';

// api_key(for)
class items extends Component {
    constructor(props){
        super(props);
        // console.log(this.props.genre);
    }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <img  className="img-thumbnail" src={"https://image.tmdb.org/t/p/original"+this.props.poster} alt="Not Available"/>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9">
                        <div className="row">
                            <div className="col-md-12">
                                <h5>{this.props.title}</h5>
                                <span>Genre: {this.props.genre.map((item, index) => item)}</span>
                                <br/>
                                <sub>Release Date: {this.props.release_date}</sub>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <p className="movie_description">{this.props.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default items;