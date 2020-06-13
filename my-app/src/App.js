import React, { Component } from 'react';
import Todos from'./components/Todos';

class App extends Component {
  state ={
    todos: [
      {
        id: 1,
        title: 'Drive to SF',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with Nico',
        completed: false
      },
      {
        id: 3,
        title: 'Eat Ice Cream',
        completed: false
      }
    ]
  }

  render() {
    console.log()
    return (
      <div className="App">
        <h1>app</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
