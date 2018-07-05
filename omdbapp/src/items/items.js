import React, {Component} from 'react';
import '../App.css';

// api_key(for)
class items extends Component {
    constructor(props){
        super(props);
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&query=sanju';
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <h2>Items Component</h2>
                </div>
            </div>
        )
    }
}

export default items;