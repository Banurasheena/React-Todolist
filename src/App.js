import React, { Component, Fragment } from "react";
import SimpleState from "./Components/Basics/SimpleState";
import Navbar from "./Components/Layout/Navbar";
import Slider from "./Components/Layout/Slider";
import About from "./Components/Layout/about"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Slider />
          <SimpleState />
          <Route path="/about" exact render={
            () => {
              return(<h1>Welcome to Lacebut</h1>);
            }
          }/>
          
        </div>
      </Router>
    );
  }
}

export default App;
