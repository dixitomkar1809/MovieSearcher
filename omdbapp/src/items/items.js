import React, {Component} from 'react';
import '../items/items.css';
import Genre from '../genre/genre';

// api_key(for)
class items extends Component {
    constructor(props){
        super(props);
        console.log(this.props.genre);
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
                                <h2>{this.props.title}</h2>
                                <p>Genre: {this.props.genre.map((item, index) => <Genre key={index} genre={item} /> )}</p>
                                <br/>
                                <p>Release Date: {this.props.release_date}</p>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <p>{this.props.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default items;