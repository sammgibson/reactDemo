import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import Header from './components/layout/header';
import Todos from'./components/Todos';
import AddTodo from './components/AddTodo';



class App extends Component {
  state ={
    todos: [
      {
        id: uuid(),
        title: 'Drive to SF',
        completed: false
      },
      {
        id: uuid(),
        title: 'Dinner with Nico',
        completed: false
      },
      {
        id: uuid(),
        title: 'Eat Ice Cream',
        completed: false
      }
    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  //add Todo
  AddTodo = (title) =>{
    const newTodo = {
      id:uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    console.log()
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.AddTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
