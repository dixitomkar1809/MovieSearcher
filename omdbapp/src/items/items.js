import React, {Component} from 'react';
import '../items/items.css';
import Genre from '../genre/genre';
// import RatingStars from '../RatingStars/RatingStars';

class items extends Component {

    render(){

        return(
            <div>
                <div className="card bg-dark">
                    <img className="card-img img-fluid" src={"https://image.tmdb.org/t/p/original"+this.props.backdrop_path} alt={this.props.title} />
                    <div className="card-img-overlay  black-background">
                        <div className="row margin-top-adjust">
                            <div className="col-md-12 col-sm-12 col-12">
                                <h1 className="card-title display-4">{this.props.title}</h1>
                                <div className="row">
                                    <div className="col-md-3 col-sm-3 col-3">
                                        <img src={"https://image.tmdb.org/t/p/original"+this.props.poster} className="img-thumbnail" alt={this.props.title} />
                                    </div>
                                    <div className="col-md-9 col-sm-9 col-9">
                                        <h4>Release Date: {this.props.release_date}</h4>
                                        <h4 className="margin-top-adjust">Rating: {this.props.rating}/10 {/*<RatingStars rating={this.props.rating}/>*/}</h4>
                                        <h4 className="margin-top-adjust">Genre: &nbsp; {this.props.genre.map((item, index) => <Genre key={index} genre={item} /> )}</h4>
                                        <h4 className="text-justify scrollable margin-top-adjust">{this.props.overview}</h4>
                                    </div>
                                </div>
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