import React, { Component } from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import uuid from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with mum',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Mango harvest',
        completed: false
      },
    ]
  }
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  
  delTodo = (id) => {
    //console.log("this: " + this.state.todos);
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    //console.log(this.state.todos);
    
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props=> (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
