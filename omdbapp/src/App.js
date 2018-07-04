import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {searchInput:'asd'};
    console.log("From the constructor");
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      searchInput: event.target.value
    });
    console.log(event);
  }

  handleSubmit(event){
    console.log(event);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">MovieDB</h1>
          <p className="lead">Information about any movie released in any year with its IMDB rating, to help you choose the right one to watch !</p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search..." value={this.state.searchInput} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <input className="form-control" type="Submit" placeholder="Search" />
            </div>
        </form>
        </div>
    </div>
    );
  }
}
export default App;
