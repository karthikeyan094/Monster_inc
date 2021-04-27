import React from 'react';
import './App.css';
import {Cardlist} from './component/card-list/card-list.component'
import { Component } from 'react';
import { Searchbox } from './component/search-box/search-box';
class App extends Component{

  constructor() {
    super();
    this.state={
      monsters: [],
      searchField:""
      
    };
    
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handler=(e)=> {
  this.setState({searchField:e.target.value})
}
  render() {
    const { monsters, searchField } = this.state;
    const filtermonster = monsters.filter((monster) => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
       <h1 className="header">Monster Rolodex</h1>
<Searchbox placeholder="seachmonster" handler={this.handler } />
          <Cardlist monster={filtermonster} />
        
      </div>
    );
  }
}
export default App;
