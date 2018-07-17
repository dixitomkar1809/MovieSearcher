import React, {Component} from 'react';
import '../RatingStars/RatingStars.css';

class RatingStars extends Component{

    starList=  [];
    starLength = 0;
    constructor(props){
        super(props);
        console.log(props);
        this.stars()
        // this.starList = this.starList.bind(this);
        // this.starLength = this.starLength.bind(this);
    }

    stars(){
        for(var x=0; x<=this.props.rating<=10; x++){
            this.starList.push(<span className="fa fa-star checked"></span>)
        }
        this.starLength = this.starList.length;
        for(x=0; x<10-this.starLength;x++){
            this.starList.push(<span className="fa fa-star not-checked"></span>)
        }
    }

    render(){
        return(
            <span>
                {  this.starList  }
            </span>
            
        )
    }
}

export default RatingStars;