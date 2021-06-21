import React from 'react';
import Button from '../Button';
import Stage from '../Stage';
import Cards from '../Cards';
import data from '../../data.json';
import './style.css';

class App extends React.Component{ 

  state = {
    active: false,
    cardsData: data.page.components[1].cards
  }
  
handleClick = (e) => {
  e.preventDefault()
  this.setState({
    active: !this.state.active
  })
  
  
}


  render() {
    return (
      <div className="container">
        <Stage data={data.page.components[0]} />
        <Cards active={this.state.active} cards = {this.state.cardsData}/>
        <Button click = {this.handleClick} active={this.state.active}  />
        
      </div>
    );
  }
}

export default App;

