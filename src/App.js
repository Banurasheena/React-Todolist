import React, { Component } from "react";
import { BrowserRouter as Router, Route}  from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css'
import uuid from 'uuid';

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
        title: 'Take out the trash',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      }
    ]
  }
  

  // toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {            
      if(todo.id ===id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
  this.setState({ todos:[...this.state.todos.filter(todo => todo.id !==id) ]});
  }

  // add todo
  addTodo = (title) =>{
    const newTodo = {
      id:uuid.v4(), title, completed:false
    }
    this.setState({todos:[...this.state.todos, newTodo ]});
  }

  render() { 
    
    return ( 
      <Router>
      <div className="App">
      <div className = "container">
      <Header />
      <Route path="/" render={props => (
        <React.Fragment>
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

        </React.Fragment>
      )} />

      <Route path="/about" Component={About} />
      
      </div>
      </div>
      </Router>
     );
  }
}

 
export default App;

