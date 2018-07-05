import React, { Component } from 'react';
import './App.css';
import Items from './items/items'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {searchInput:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      searchInput: event.target.value
    });
    console.log(this.state.searchInput);
  }

  handleSubmit(event){
    fetch('https://api.themoviedb.org/3/search/movie?api_key=e5c08d4b52d5ba11d89435bd750733b9&query=sanju')
    .then((response) => console.log(response.json()))
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">MovieDB</h1>
          <p className="lead">Information about any movie released in any year with its IMDB rating, to help you choose the right one to watch !</p>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search..." value={this.state.searchInput} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <input className="form-control" type="Submit" onClick={this.handleSubmit} placeholder="Search" />
            </div>
          </form>
      </div>
      <Items/>
    </div>
    );
  }
}
export default App;
