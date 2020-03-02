import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';
import Food from './Components/Food'





class App extends Component {

state = {
  showFoods : false
}

 toggleFoodsHandler = () => {
    const doesShow = this.state.showFoods;
    this.setState({showFoods: !doesShow});
 }
  render(){
    return (
      <div className="App">
        <h1>Hello, welcome to my sandbox!</h1>
        <h3> I'm excited to be learning :)</h3>
        <Person name="Andrew" age="28"/>
        <Person name="Amelia" age="25"/>
        <button onClick={this.toggleFoodsHandler}>Show foods</button>
        {this.state.showFoods ?
          <div>
            <Food/> 
            </div> : null
        } 
      </div>
    );
  }
}

export default App;
